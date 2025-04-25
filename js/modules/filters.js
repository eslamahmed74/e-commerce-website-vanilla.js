import { getCategoryDisplayName } from './utils.js';

export function initFilters() {
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

  // Initialize filter functionality
  initFilterFunctionality();
}

function initFilterFunctionality() {
  // All the filter-related event listeners and functions
  // (price range, toggles, apply/clear filters, etc.)
  // This would include the code from your original file
  // that handles all the filter interactions

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
}
