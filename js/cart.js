import { initFooter } from './modules/footer.js';

document.addEventListener('DOMContentLoaded', function () {
  initCart();
  initFooter();
});

function initCart() {
  const emptyCartView = document.getElementById('emptyCartView');
  const cartWithItemsView = document.getElementById('cartWithItemsView');
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartCountTitle = document.querySelector('.cart-count-title');
  const summaryPrice = document.querySelector('.summary-price');
  const checkoutBtn = document.querySelector('.checkout-btn');

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    emptyCartView.innerHTML = `
      <div class="empty-cart-content">
        <div class="cart-icon-circle">
          <img src="images/empty-cart-icon.png" alt="Empty Cart" />
        </div>
        <h2>Please log in to view your cart</h2>
        <button onclick="window.location.href='login.html'" class="start-shopping-btn">
          Go to Login
        </button>
      </div>
    `;
    emptyCartView.style.display = 'block';
    cartWithItemsView.style.display = 'none';
    return;
  }

  const userCartKey = `cart_${currentUser.id}`;
  let cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

  renderCart();

  function renderCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      emptyCartView.style.display = 'block';
      cartWithItemsView.style.display = 'none';
      return;
    }

    emptyCartView.style.display = 'none';
    cartWithItemsView.style.display = 'flex';

    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      console.log(item);
      


      cartItem.innerHTML = `
        <div class="item-image">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="item-details">
          <h3 class="item-title">${item.title}</h3>
        </div>
        <div class="item-price">
          <div class="current-price">EGP ${(
            parseFloat(item.price) * (item.quantity || 1)
          ).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
        </div>
        <div class="item-actions">
          <button class="remove-btn" data-index="${index}">
            <span class="trash-icon">🗑</span> Remove
          </button>
          <div class="quantity-controls">
            <button class="qty-btn decrease" data-index="${index}">−</button>
            <input type="text" class="qty-input" value="${
              item.quantity || 1
            }" readonly />
            <button class="qty-btn increase" data-index="${index}">+</button>
          </div>
        </div>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    updateSummary();
    addEventListeners();
  }

  function addEventListeners() {
    const removeBtns = document.querySelectorAll('.remove-btn');
    const decreaseBtns = document.querySelectorAll('.decrease');
    const increaseBtns = document.querySelectorAll('.increase');

    removeBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const index = this.dataset.index;
        cart.splice(index, 1);
        saveCart();
        renderCart();
      });
    });

    decreaseBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const index = this.dataset.index;
        if ((cart[index].quantity || 1) > 1) {
          cart[index].quantity = (cart[index].quantity || 1) - 1;
          saveCart();
          renderCart();
        }
      });
    });

    increaseBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const index = this.dataset.index;
        if ((cart[index].quantity || 1) < 10) {
          cart[index].quantity = (cart[index].quantity || 1) + 1;
          saveCart();
          renderCart();
        }
      });
    });
  }

  function updateSummary() {
    const totalItems = cart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    const totalPrice = cart.reduce(
      (sum, item) => sum + parseFloat(item.price) * (item.quantity || 1),
      0
    );

    cartCountTitle.textContent = `(${totalItems})`;
    summaryPrice.textContent = `EGP ${totalPrice.toLocaleString('en-US', {
      minimumFractionDigits: 2,
    })}`;
    checkoutBtn.textContent = `Checkout (EGP ${totalPrice.toLocaleString(
      'en-US',
      { minimumFractionDigits: 2 }
    )})`;

    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.textContent = totalItems;
    }
  }

  function saveCart() {
    localStorage.setItem(userCartKey, JSON.stringify(cart));
  }
}
