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
});
