import { initAuthModal } from './modules/authModal.js';
import { initCarousel } from './modules/carousel.js';
import { initCategories } from './modules/categories.js';
import { initProducts } from './modules/products.js';
import { initFilters } from './modules/filters.js';
import { initFooter } from './modules/footer.js'; // Add this line

document.addEventListener('DOMContentLoaded', function () {
  initAuthModal();
  initCarousel();
  initCategories();
  initProducts();
  initFilters();
  initFooter();
});
