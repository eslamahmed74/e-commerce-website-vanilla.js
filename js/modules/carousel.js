export function initCarousel() {
  const slidesContainer = document.querySelector('.slides');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const dotsContainer = document.querySelector('.dots');

  const adds = [
    'images/adds/1.png',
    'images/adds/2.png',
    'images/adds/6.png',
    'images/adds/7.png',
    'images/adds/8.png',
    'images/adds/10.png',
  ];

  let current = 0;

  // Clear containers before adding new elements
  slidesContainer.innerHTML = '';
  dotsContainer.innerHTML = '';

  adds.forEach((e, i) => {
    let active = i === 0 ? 'active' : '';
    slidesContainer.innerHTML += `<div class="slide ${active}">
        <img src="${e}" alt="Promotional image ${i + 1}" />
      </div>`;
    dotsContainer.innerHTML += `<span class="dot ${active}" data-index="${i}"></span>`;
  });

  // Set height for slider based on first image
  const firstImg = slidesContainer.querySelector('img');
  firstImg.onload = function () {
    slidesContainer.style.height = this.offsetHeight + 'px';
  };

  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
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

  // Auto-rotate commented out by default
  // setInterval(() => {
  //   current = (current + 1) % slides.length;
  //   showSlide(current);
  // }, 5000);
}
