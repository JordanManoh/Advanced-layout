import Swiper from 'swiper';
import 'swiper/css';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export const useBlogSliders = () => {
    new Swiper('.hero__slider', {
        modules: [Pagination, Autoplay],
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 16,
        loop: true,
        speed: 5000,

        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: '.pagination',
        },

        breakpoints: {
            992: {
                spaceBetween: 32,
            },
            769: {
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 'auto',
                centeredSlides: false,
            },
            100: {
                centeredSlides: true,
                slidesPerView: 'auto',
            },
        },
    });

    new Swiper('.articles-two__slider', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 16,

        navigation: {
            nextEl: '.articles-two__slider-button-next',
            prevEl: '.articles-two__slider-button-prev',
        },
        breakpoints: {
            992: {
                spaceBetween: 32,
            },
        },
    });
};
