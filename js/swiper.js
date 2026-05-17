document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.bestsellers .swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,

        navigation: {
            nextEl: '.bestsellers .swiper-button-next',
            prevEl: '.bestsellers .swiper-button-prev',
        },

        slidesPerView: 4,
        spaceBetween: 30,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1700: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });
});
