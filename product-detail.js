// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
import { data } from './data.js';
import { initFooter } from './js/modules/footer.js';

function initProductDetails() {
  initFooter();

  const product = data[productId];
  console.log('product', product);

  if (!product) {
    // Handle product not found
    document.body.innerHTML = '<div class="error">Product not found</div>';
    return;
  }

  // Set product data
  document.getElementById('productTitle').textContent = product.title;
  document.getElementById('productDescription').textContent =
    product.description;
  document.getElementById('productPrice').textContent = `EGP ${product.price}`;
  document.getElementById('productBrand').textContent = product.brand;

  // Set images
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

  // Thumbnail click event
  document.querySelectorAll('.thumbnail').forEach((thumb) => {
    thumb.addEventListener('click', function () {
      document.querySelector('.thumbnail.active').classList.remove('active');
      this.classList.add('active');
      mainImage.src = this.dataset.image;
    });
  });

  // Quantity controls
  document
    .querySelector('.quantity-btn.minus')
    .addEventListener('click', function () {
      const input = document.querySelector('.quantity-input');
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });

  document
    .querySelector('.quantity-btn.plus')
    .addEventListener('click', function () {
      const input = document.querySelector('.quantity-input');
      input.value = parseInt(input.value) + 1;
    });

  // Add to cart functionality
  document.getElementById('addToCart').addEventListener('click', function () {
    const quantity = parseInt(document.querySelector('.quantity-input').value);
    addToCart(product, quantity);

    // Show confirmation
    alert(`${quantity} ${product.title} added to cart!`);
  });
}

// Add to cart function
function addToCart(product, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if product already in cart
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', initProductDetails);
