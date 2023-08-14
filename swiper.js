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
});