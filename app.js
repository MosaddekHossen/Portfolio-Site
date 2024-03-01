var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2500,
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
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});