import { initFooter } from './modules/footer.js'; // Add this line

// js/cart.js
document.addEventListener('DOMContentLoaded', function () {
  initCart();

  initFooter();
});

function initCart() {
  // DOM elements
  const emptyCartView = document.getElementById('emptyCartView');
  const cartWithItemsView = document.getElementById('cartWithItemsView');
  const removeBtn = document.querySelector('.remove-btn');
  const decreaseBtn = document.querySelector('.decrease');
  const increaseBtn = document.querySelector('.increase');
  const qtyInput = document.querySelector('.qty-input');

  const hasItems = true; 

  if (hasItems) {
    emptyCartView.style.display = 'none';
    cartWithItemsView.style.display = 'flex';
  } else {
    emptyCartView.style.display = 'block';
    cartWithItemsView.style.display = 'none';
  }

  // Event handlers
  if (removeBtn) {
    removeBtn.addEventListener('click', function () {
      // For demo, we'll just show the empty cart when remove is clicked
      emptyCartView.style.display = 'block';
      cartWithItemsView.style.display = 'none';
    });
  }

  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', function () {
      let qty = parseInt(qtyInput.value);
      if (qty > 1) {
        qtyInput.value = qty - 1;
        updateCartTotals(qtyInput.value);
      }
    });
  }

  if (increaseBtn) {
    increaseBtn.addEventListener('click', function () {
      let qty = parseInt(qtyInput.value);
      // For demo purposes, we'll limit to 10
      if (qty < 10) {
        qtyInput.value = qty + 1;
        updateCartTotals(qtyInput.value);
      }
    });
  }
}

function updateCartTotals(quantity) {
  // Update cart totals based on quantity
  // This is a simplified version - in a real app, you'd recalculate prices
  const basePrice = 2958.0;
  const currentPrice = document.querySelector('.current-price');
  const summaryPrice = document.querySelector('.summary-price');
  const checkoutBtn = document.querySelector('.checkout-btn');

  const totalPrice = basePrice * quantity;
  const formattedPrice = `EGP ${totalPrice.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  currentPrice.textContent = formattedPrice;
  summaryPrice.textContent = formattedPrice;
  checkoutBtn.textContent = `Checkout (${formattedPrice})`;
}
