(function () {
    const parent = document.querySelector(".why-me__slider");
    if (!parent) return;

    new Swiper(parent, {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".why-me .sl-arrows__arrow--next",
            prevEl: ".why-me .sl-arrows__arrow--prev",
        },
        breakpoints: {
    
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
            },

            960: {
                slidesPerView: 3,
            },
        },
    });
})();
