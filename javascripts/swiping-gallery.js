document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  } else {
    console.warn("Swiper is not loaded yet.");
  }
});
