var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 1100,
    disableOnInteraction: false,
    speed: 800,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    speed: 800,
  },
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});