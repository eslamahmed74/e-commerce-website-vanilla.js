
// js/modules/footer.js
export function initFooter() {
    // Support section data
    const supportData = {
      title: "We're Always Here To Help",
      description: 'Reach out to us through any of these support channels',
      channels: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#7e859b"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,
          title: 'HELP CENTER',
          text: 'help.eamporium.com',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#7e859b"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
          title: 'EMAIL SUPPORT',
          text: 'support@eamporium.com',
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#7e859b"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
          title: 'PHONE SUPPORT',
          text: '1-800-EAMPORIUM',
        },
      ],
    };
  
    // Categories data
    const categoriesData = [
      {
        title: 'ELECTRONICS',
        items: [
          'Mobiles',
          'Tablets',
          'Laptops',
          'Home Appliances',
          'Camera, Photo & Video',
          'Televisions',
          'Headphones',
          'Video Games',
        ],
      },
      {
        title: 'FASHION',
        items: [
          "Women's Fashion",
          "Men's Fashion",
          "Girls' Fashion",
          "Boys' Fashion",
          "Men's Watches",
          "Women's Watches",
          'Eyewear',
          'Bags & Luggage',
        ],
      },
      {
        title: 'HOME AND KITCHEN',
        items: [
          'Kitchen & Dining',
          'Bedding',
          'Bath',
          'Home Decor',
          'Home Appliances',
          'Tools & Home Improvement',
          'Patio, Lawn & Garden',
          'Home Storage & Organisation',
        ],
      },
      {
        title: 'BEAUTY',
        items: [
          "Women's Fragrance",
          "Men's Fragrance",
          'Make-Up',
          'Haircare',
          'Skincare',
          'Personal Care',
          'Tools & Accessories',
        ],
      },
      {
        title: 'KIDS, BABY & TOYS',
        items: [
          'Strollers, Prams & Accessories',
          'Car Seats',
          'Baby Clothing',
          'Feeding',
          'Bathing & Skincare',
          'Diapering',
          'Baby & Toddler Toys',
          'Toys & Games',
        ],
      },
      {
        title: 'TOP BRANDS',
        items: [
          'Apple',
          'Samsung',
          'Nike',
          'Ray-Ban',
          'Tefal',
          "L'Oreal Paris",
          'Chicco',
          'Tornado',
        ],
      },
      {
        title: 'DISCOVER NOW',
        items: [
          'Brand Glossary',
          'New Arrivals',
          'Best Sellers',
          'Special Offers',
        ],
      },
    ];
  
    // Shopping & Social data
    const shoppingSocialData = {
      shopOnGo: {
        title: 'SHOP ON THE GO',
        apps: [
          {
            imgSrc: 'https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg',
            alt: 'App Store',
          },
          {
            imgSrc: 'https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg',
            alt: 'Google Play',
          },
        ],
      },
      connectWithUs: {
        title: 'CONNECT WITH US',
        socialLinks: [
          { 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#404553" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>` 
          },
          { 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#404553" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>` 
          },
          { 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#404553" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>` 
          },
          { 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#404553" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>` 
          },
        ],
      },
    };
  
    // Generate support section
    const supportSection = document.getElementById('support-section');
    if (supportSection) {
      let supportHTML = `
          <div class="support-text">
            <h2>${supportData.title}</h2>
            <p>${supportData.description}</p>
          </div>
          <div class="support-channels">
        `;
  
      supportData.channels.forEach((channel) => {
        supportHTML += `
            <div class="support-channel">
              <div class="channel-icon">${channel.icon}</div>
              <div class="channel-info">
                <p>${channel.title}</p>
                <p>${channel.text}</p>
              </div>
            </div>
          `;
      });
  
      supportHTML += `</div>`;
      supportSection.innerHTML = supportHTML;
    }
  
    // Generate categories section for the footer
    const footerCategoriesSection = document.querySelector('.footer-container #categories-section');
    if (footerCategoriesSection) {
      let categoriesHTML = '';
  
      categoriesData.forEach((category) => {
        categoriesHTML += `
            <div class="category">
              <h3>${category.title}</h3>
              <ul class='categoryList'>
          `;
  
        category.items.forEach((item) => {
          categoriesHTML += `<li><a href="#">${item}</a></li>`;
        });
  
        categoriesHTML += `
              </ul>
            </div>
          `;
      });
  
      footerCategoriesSection.innerHTML = categoriesHTML;
    }
  
    // Generate shopping & social section
    const shoppingSocialSection = document.getElementById('shopping-social-section');
    if (shoppingSocialSection) {
      let shoppingSocialHTML = `
          <div class="shop-on-go">
            <h3>${shoppingSocialData.shopOnGo.title}</h3>
            <div class="app-stores">
        `;
  
      shoppingSocialData.shopOnGo.apps.forEach((app) => {
        shoppingSocialHTML += `
            <a href="#" class="app-store">
              <img src="${app.imgSrc}" alt="${app.alt}" />
            </a>
          `;
      });
  
      shoppingSocialHTML += `
            </div>
          </div>
          <div class="connect-with-us">
            <h3>${shoppingSocialData.connectWithUs.title}</h3>
            <div class="social-links">
        `;
  
      shoppingSocialData.connectWithUs.socialLinks.forEach((link) => {
        shoppingSocialHTML += `<a href="#" class="social-link">${link.icon}</a>`;
      });
  
      shoppingSocialHTML += `
            </div>
          </div>
        `;
  
      shoppingSocialSection.innerHTML = shoppingSocialHTML;
    }
  }