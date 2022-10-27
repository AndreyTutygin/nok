import Swiper, {
    Navigation
} from 'swiper';

const swiper = new Swiper(".slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.btn-arrow_next',
        prevEl: '.btn-arrow_prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
