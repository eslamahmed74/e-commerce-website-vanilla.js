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

  // Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show button when user scrolls down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll back to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll
  });
});

});
