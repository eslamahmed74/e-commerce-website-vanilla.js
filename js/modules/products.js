export function initProducts() {
  const cardContainer = document.querySelector('.cardContainer');

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

  cardContainer.innerHTML = '';
  recommended.forEach((obj) => {
    cardContainer.innerHTML += `
        <div class="card">
          <div class="imgContainer">
            <img src="${obj.img}" alt="" />
            <div class="favorite">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
              </a>
            </div>
            <div class="cart">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="cardContent">
            <p class="description">${obj.description}</p>
            <p class="price"><span>EGP</span> ${obj.price}</p>
          </div>
        </div>`;
  });
}
