var swiperStore = new Swiper(".boySwipper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1800,
      },
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    },
});