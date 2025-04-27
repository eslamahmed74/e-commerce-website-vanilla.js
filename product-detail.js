// product-detail.js
import { data } from './data.js';
import { initFooter } from './js/modules/footer.js';

document.addEventListener('DOMContentLoaded', initProductDetails);

function initProductDetails() {
  initFooter();

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  console.log(productId);
  
  const product = data[productId];
  console.log(product);
  
  if (!product) {
    document.body.innerHTML = '<div class="error">Product not found</div>';
    return;
  }

  // Set product data
  document.getElementById('productTitle').textContent = product.title;
  document.getElementById('productDescription').textContent =
    product.description;
  document.getElementById('productPrice').textContent = `EGP ${product.price}`;
  document.getElementById('productBrand').textContent = product.brand;

  // Set product images
  const mainImage = document.getElementById('mainProductImage');
  const thumbnails = document.querySelectorAll('.thumbnail');

  mainImage.src = product.img;
  mainImage.alt = product.title;

  thumbnails.forEach((thumb, index) => {
    if (product.img) {
      thumb.dataset.image = product.img;
      thumb.querySelector('img').src = product.img;
      thumb.querySelector('img').alt = `${product.title} - ${index + 1}`;
    } else {
      thumb.style.display = 'none';
    }
  });

  // Thumbnail click functionality
  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', function () {
      document.querySelector('.thumbnail.active').classList.remove('active');
      this.classList.add('active');
      mainImage.src = this.dataset.image;
    });
  });

  // Quantity selector functionality
  document
    .querySelector('.quantity-btn.minus')
    .addEventListener('click', function () {
      const input = document.getElementById('quantity-input');
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });

  document
    .querySelector('.quantity-btn.plus')
    .addEventListener('click', function () {
      const input = document.getElementById('quantity-input');
      input.value = parseInt(input.value) + 1;
    });

  // Add to Cart functionality
  document.getElementById('addToCart').addEventListener('click', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
      alert('Please log in to add products to your cart.');
      window.location.href = 'login.html';
      return;
    }

    const quantity = parseInt(document.getElementById('quantity-input').value);
    addToCart(product, quantity);
    alert(`${quantity} x ${product.title} added to cart!`);
  });
}

function addToCart(product, quantity) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    alert('Please log in to add products to your cart.');
    window.location.href = 'login.html';
    return;
  }

  const userCartKey = `cart_${currentUser.id}`;
  let cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.img,
      quantity: quantity,
    });
  }

  localStorage.setItem(userCartKey, JSON.stringify(cart));
}
