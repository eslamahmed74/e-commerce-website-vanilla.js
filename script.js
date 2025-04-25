document.addEventListener('DOMContentLoaded', function () {
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');
  const logInBtn = document.querySelector('.login-btn');
  const signUpBtn = document.querySelector('.register-btn');
  const loginBody = document.querySelector('.login-body');
  const signUpBody = document.querySelector('.signup-body');
  const authBtn = document.querySelector('.authBtn');

  const slidesContainer = document.querySelector('.slides');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const dotsContainer = document.querySelector('.dots');
  const categoryContainer = document.querySelector('.category ul');

  const cardContainer = document.querySelector('.cardContainer');

  let current = 0;
  const adds = [
    'images/adds/1.png',
    'images/adds/2.png',
    'images/adds/6.png',
    'images/adds/7.png',
    'images/adds/8.png',
    'images/adds/10.png',
  ];

  const categories = [
    'images/category/1.png',
    'images/category/10.png',
    'images/category/11.png',
    'images/category/12.png',
    'images/category/13.png',
    'images/category/14.png',
    'images/category/15.png',
    'images/category/16.png',
    // 'images/category/17.png',
    // 'images/category/18.png',
  ];

  const recommended = [
    {
      img: 'images/recommand-images/3.png',
      description: `Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB -
                  Middle East Version`,
      price: '56399.00',
    },
    {
      img: 'images/recommand-images/2.png',
      description: `Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB -
                  Middle East Version`,
      price: '56399.00',
    },
    {
      img: 'images/recommand-images/4.png',
      description: `Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB -
                  Middle East Version`,
      price: '56399.00',
    },
    {
      img: 'images/recommand-images/5.png',
      description: `Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB -
                  Middle East Version`,
      price: '56399.00',
    },
    {
      img: 'images/recommand-images/6.png',
      description: `Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB -
                  Middle East Version`,
      price: '56399.00',
    },
  ];

  // Clear containers before adding new elements
  slidesContainer.innerHTML = '';
  dotsContainer.innerHTML = '';
  categoryContainer.innerHTML = '';
  cardContainer.innerHTML = '';
  adds.forEach((e, i) => {
    let active = i === 0 ? 'active' : '';

    slidesContainer.innerHTML += `<div class="slide ${active}">
          <img src="${e}" alt="Promotional image ${i + 1}" />
        </div>`;

    dotsContainer.innerHTML += `<span class="dot ${active}" data-index="${i}"></span>`;
  });

  categories.forEach((e) => {
    categoryContainer.innerHTML += `<li class="categoryList">
                <img src="${e}" alt="" />
              </li>`;
  });

  recommended.forEach((obj) => {
    cardContainer.innerHTML += `<div class="card">
              <div class="imgContainer">
                <img src="${obj.img}" alt="" />

                <div class="favorite">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                      />
                    </svg>
                  </a>
                </div>

                <div class="cart">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-cart2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="cardContent">
                <p class="description">
                  ${obj.description}
                </p>
                <p class="price"><span>EGP</span> ${obj.price}</p>
              </div>
            </div>`;
  });

  // Set height for slider based on first image
  const firstImg = slidesContainer.querySelector('img');
  firstImg.onload = function () {
    slidesContainer.style.height = this.offsetHeight + 'px';
  };

  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    dots.forEach((dot) => {
      dot.classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      current = parseInt(dot.getAttribute('data-index'));
      showSlide(current);
    });
  });

  // Auto-rotate the slides every 5 seconds
  // setInterval(() => {
  //   current = (current + 1) % slides.length;
  //   showSlide(current);
  // }, 5000);

  // Modal functionality
  authBtn.addEventListener('click', function () {
    loginModal.style.display = 'flex';
  });

  closeModal.addEventListener('click', function () {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  logInBtn.addEventListener('click', () => {
    signUpBtn.classList.remove('btn-active');
    logInBtn.classList.add('btn-active');
    loginBody.classList.remove('hide');
    signUpBody.classList.add('hide');
  });

  signUpBtn.addEventListener('click', () => {
    signUpBtn.classList.add('btn-active');
    logInBtn.classList.remove('btn-active');
    loginBody.classList.add('hide');
    signUpBody.classList.remove('hide');
  });

  //=====================================================

  const categoriesData = [
    {
      name: 'Clothing',
      count: 120,
      id: 'clothing',
      subcategories: [
        { name: 'Men', count: 45, id: 'men' },
        { name: 'Women', count: 63, id: 'women' },
        { name: 'Kids', count: 12, id: 'kids' },
      ],
    },
    {
      name: 'Electronics',
      count: 86,
      id: 'electronics',
      subcategories: [
        { name: 'Phones', count: 25, id: 'phones' },
        { name: 'Laptops', count: 32, id: 'laptops' },
        { name: 'Accessories', count: 29, id: 'accessories' },
      ],
    },
    {
      name: 'Home & Kitchen',
      count: 74,
      id: 'home',
      subcategories: [
        { name: 'Furniture', count: 28, id: 'furniture' },
        { name: 'Appliances', count: 31, id: 'appliances' },
        { name: 'Decor', count: 15, id: 'decor' },
      ],
    },
    {
      name: 'Books',
      count: 42,
      id: 'books',
      subcategories: [],
    },
  ];

  // Data for quick price filters
  const priceFiltersData = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200 - $500', min: 200, max: 500 },
    { label: 'Over $500', min: 500, max: 1000 },
  ];

  // Data for products
  const productsData = [
    { title: 'Smartphone Pro', category: 'electronics-phones', price: 799 },
    { title: "Men's Casual Shirt", category: 'clothing-men', price: 49 },
    { title: 'Modern Wall Art', category: 'home-decor', price: 129 },
    { title: 'Ultrabook Pro', category: 'electronics-laptops', price: 1299 },
    { title: "Women's Dress", category: 'clothing-women', price: 89 },
    { title: 'Modern Coffee Table', category: 'home-furniture', price: 349 },
    { title: 'Bestseller Novel', category: 'books', price: 24 },
    {
      title: 'Wireless Earbuds',
      category: 'electronics-accessories',
      price: 59,
    },
  ];

  // Generate categories HTML
  const categoryList = document.getElementById('category-list');
  categoriesData.forEach((category) => {
    const categoryItem = document.createElement('li');
    categoryItem.className = 'category-item';
    if (category.subcategories.length > 0) {
      categoryItem.classList.add('category-parent');

      // Create subcategory list
      let subcategoriesHTML = '';
      category.subcategories.forEach((sub) => {
        subcategoriesHTML += `
            <li class="category-item">
              <label class="category-label">
                <input type="checkbox" class="category-checkbox" data-category="${category.id}-${sub.id}" />
                <span>${sub.name}</span>
                <span class="category-count">(${sub.count})</span>
              </label>
            </li>
          `;
      });

      categoryItem.innerHTML = `
          <label class="category-label">
            <input type="checkbox" class="category-checkbox" data-category="${category.id}" />
            <span>${category.name}</span>
            <span class="category-count">(${category.count})</span>
          </label>
          <button class="toggle-subcategory" data-target="${category.id}-subcategories">+</button>
          <ul class="subcategory-list" id="${category.id}-subcategories">
            ${subcategoriesHTML}
          </ul>
        `;
    } else {
      categoryItem.innerHTML = `
          <label class="category-label">
            <input type="checkbox" class="category-checkbox" data-category="${category.id}" />
            <span>${category.name}</span>
            <span class="category-count">(${category.count})</span>
          </label>
        `;
    }
    categoryList.appendChild(categoryItem);
  });

  // Generate quick price filters
  const quickPriceFilters = document.getElementById('quick-price-filters');
  priceFiltersData.forEach((filter) => {
    const button = document.createElement('button');
    button.className = 'quick-price-btn';
    button.textContent = filter.label;
    button.setAttribute('data-min', filter.min);
    button.setAttribute('data-max', filter.max);
    quickPriceFilters.appendChild(button);
  });

  // Generate products
  const productsGrid = document.getElementById('products-grid');
  productsData.forEach((product) => {
    const displayCategory = getCategoryDisplayName(product.category);

    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-category', product.category);
    productCard.setAttribute('data-price', product.price);

    productCard.innerHTML = `
        <div class="product-image">Product Image</div>
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-category">${displayCategory}</p>
          <p class="product-price">$${product.price}</p>
        </div>
      `;

    productsGrid.appendChild(productCard);
  });

  // Toggle filter sections

  const filterTitles = document.querySelectorAll('.filter-title');
  filterTitles.forEach((title) => {
    title.addEventListener('click', function () {
      this.classList.toggle('collapsed');
      const content = this.nextElementSibling;
      content.classList.toggle('collapsed');
    });
  });

  // Toggle subcategories
  const toggleButtons = document.querySelectorAll('.toggle-subcategory');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const target = document.getElementById(this.getAttribute('data-target'));
      target.classList.toggle('active');
      this.textContent = target.classList.contains('active') ? '−' : '+';
    });
  });

  // Price range slider functionality
  const rangeMin = document.querySelector('.range-min');
  const rangeMax = document.querySelector('.range-max');
  const priceProgress = document.querySelector('.price-progress');
  const minValue = document.querySelector('.min-value');
  const maxValue = document.querySelector('.max-value');

  // Set initial price progress
  priceProgress.style.left = (rangeMin.value / rangeMin.max) * 100 + '%';
  priceProgress.style.right = 100 - (rangeMax.value / rangeMax.max) * 100 + '%';

  function updatePriceRange() {
    const minVal = parseInt(rangeMin.value);
    const maxVal = parseInt(rangeMax.value);

    if (maxVal - minVal < 50) {
      if (this === rangeMin) {
        rangeMin.value = maxVal - 50;
      } else {
        rangeMax.value = minVal + 50;
      }
    } else {
      minValue.textContent = '$' + minVal;
      maxValue.textContent = '$' + maxVal;
      priceProgress.style.left = (minVal / rangeMin.max) * 100 + '%';
      priceProgress.style.right = 100 - (maxVal / rangeMax.max) * 100 + '%';
    }
  }

  rangeMin.addEventListener('input', updatePriceRange);
  rangeMax.addEventListener('input', updatePriceRange);

  // Quick price buttons
  const quickPriceButtons = document.querySelectorAll('.quick-price-btn');
  quickPriceButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const min = parseInt(this.getAttribute('data-min'));
      const max = parseInt(this.getAttribute('data-max'));

      rangeMin.value = min;
      rangeMax.value = max;
      minValue.textContent = '$' + min;
      maxValue.textContent = '$' + max;
      priceProgress.style.left = (min / rangeMin.max) * 100 + '%';
      priceProgress.style.right = 100 - (max / rangeMax.max) * 100 + '%';

      // Toggle active class on buttons
      quickPriceButtons.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Mobile filter toggle
  const filterToggle = document.querySelector('.filter-toggle');
  const filters = document.querySelector('.filters');

  filterToggle.addEventListener('click', function () {
    filters.classList.toggle('active');
    this.textContent = filters.classList.contains('active')
      ? 'Hide Filters'
      : 'Show Filters';
  });

  // Apply filters functionality
  const applyButton = document.querySelector('.apply-filter');
  const clearButton = document.querySelector('.clear-filter');
  const activeFiltersContainer = document.querySelector('.active-filters');
  const products = document.querySelectorAll('.product-card');
  let activeFilters = {
    categories: [],
    priceMin: 0,
    priceMax: 1000,
  };

  // Apply filters
  applyButton.addEventListener('click', function () {
    // Get selected categories
    const selectedCategories = [];
    const categoryCheckboxes = document.querySelectorAll(
      '.category-checkbox:checked'
    );
    categoryCheckboxes.forEach((checkbox) => {
      selectedCategories.push(checkbox.getAttribute('data-category'));
    });

    // Get price range
    const minPrice = parseInt(rangeMin.value);
    const maxPrice = parseInt(rangeMax.value);

    // Update active filters
    activeFilters.categories = selectedCategories;
    activeFilters.priceMin = minPrice;
    activeFilters.priceMax = maxPrice;

    // Display active filters
    updateActiveFiltersDisplay();

    // Filter products
    filterProducts();
  });

  // Clear all filters
  clearButton.addEventListener('click', function () {
    // Reset categories
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    categoryCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Reset price range
    rangeMin.value = 0;
    rangeMax.value = 1000;
    minValue.textContent = '$0';
    maxValue.textContent = '$1000';
    priceProgress.style.left = '0%';
    priceProgress.style.right = '0%';

    // Reset quick price buttons
    quickPriceButtons.forEach((btn) => btn.classList.remove('active'));

    // Reset active filters
    activeFilters = {
      categories: [],
      priceMin: 0,
      priceMax: 1000,
    };

    // Update display
    updateActiveFiltersDisplay();
    filterProducts();
  });

  // Update active filters display
  function updateActiveFiltersDisplay() {
    activeFiltersContainer.innerHTML = '';

    // Add category filters
    activeFilters.categories.forEach((category) => {
      const displayName = getCategoryDisplayName(category);
      const filterTag = document.createElement('div');
      filterTag.className = 'active-filter-tag';
      filterTag.innerHTML = `
          ${displayName}
          <button class="remove-filter" data-type="category" data-value="${category}">×</button>
        `;
      activeFiltersContainer.appendChild(filterTag);
    });

    // Add price filter
    if (activeFilters.priceMin > 0 || activeFilters.priceMax < 1000) {
      const filterTag = document.createElement('div');
      filterTag.className = 'active-filter-tag';
      filterTag.innerHTML = `
          Price: $${activeFilters.priceMin} - $${activeFilters.priceMax}
          <button class="remove-filter" data-type="price">×</button>
        `;
      activeFiltersContainer.appendChild(filterTag);
    }

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-filter');
    removeButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const type = this.getAttribute('data-type');

        if (type === 'category') {
          const value = this.getAttribute('data-value');
          // Remove from active filters
          activeFilters.categories = activeFilters.categories.filter(
            (cat) => cat !== value
          );
          // Uncheck the checkbox
          const checkbox = document.querySelector(
            `.category-checkbox[data-category="${value}"]`
          );
          if (checkbox) checkbox.checked = false;
        } else if (type === 'price') {
          // Reset price filter
          activeFilters.priceMin = 0;
          activeFilters.priceMax = 1000;
          rangeMin.value = 0;
          rangeMax.value = 1000;
          minValue.textContent = '$0';
          maxValue.textContent = '$1000';
          priceProgress.style.left = '0%';
          priceProgress.style.right = '0%';
          quickPriceButtons.forEach((btn) => btn.classList.remove('active'));
        }

        // Update display
        updateActiveFiltersDisplay();
        filterProducts();
      });
    });
  }

  // Filter products based on active filters
  function filterProducts() {
    products.forEach((product) => {
      const category = product.getAttribute('data-category');
      const price = parseInt(product.getAttribute('data-price'));
      const categoryMatch =
        activeFilters.categories.length === 0 ||
        activeFilters.categories.some((cat) => {
          // Check if category matches directly or if it's a parent of the product category
          return category === cat || category.startsWith(cat + '-');
        });
      const priceMatch =
        price >= activeFilters.priceMin && price <= activeFilters.priceMax;

      if (categoryMatch && priceMatch) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  // Helper function to get display name for category
  function getCategoryDisplayName(category) {
    const parts = category.split('-');
    let displayName = '';

    switch (parts[0]) {
      case 'clothing':
        displayName = 'Clothing';
        break;
      case 'electronics':
        displayName = 'Electronics';
        break;
      case 'home':
        displayName = 'Home & Kitchen';
        break;
      case 'books':
        displayName = 'Books';
        break;
      default:
        displayName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    }

    if (parts.length > 1) {
      let subCategory = '';
      switch (parts[1]) {
        case 'men':
          subCategory = 'Men';
          break;
        case 'women':
          subCategory = 'Women';
          break;
        case 'kids':
          subCategory = 'Kids';
          break;
        case 'phones':
          subCategory = 'Phones';
          break;
        case 'laptops':
          subCategory = 'Laptops';
          break;
        case 'accessories':
          subCategory = 'Accessories';
          break;
        case 'furniture':
          subCategory = 'Furniture';
          break;
        case 'appliances':
          subCategory = 'Appliances';
          break;
        case 'decor':
          subCategory = 'Decor';
          break;
        default:
          subCategory = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
      }
      displayName += ' > ' + subCategory;
    }

    return displayName;
  }
});
