document.addEventListener("DOMContentLoaded", function () {
  const imageUrls = [
    '../assets/fotky-hotelu/vchod-recepce.jpg',
    '../assets/fotky-hotelu/dvojluzko-2-komfort.jpg',
    '../assets/fotky-hotelu/postel-dalka-komfort.jpg'
  ];

  const banner = document.querySelector('.hero-banner');

  imageUrls.forEach((url, index) => {
    const slide = document.createElement('div');
    slide.classList.add('kenburns-slide');
    slide.style.backgroundImage = `url('${url}')`;
    if (index === 0) slide.classList.add('active');
    banner.appendChild(slide);
  });

  const slides = document.querySelectorAll('.kenburns-slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 8000); // switch every 8 seconds
});
