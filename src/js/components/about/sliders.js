import Swiper from 'swiper';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';

export const useAboutSliders = () => {
    new Swiper('.hero__slider', {
        modules: [Pagination, Autoplay],
        slidesPerView: 'auto',
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

    new Swiper('.team__slider', {
        modules: [Pagination, Autoplay],
        slidesPerView: 'auto',
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
                slidesPerView: 'auto',
            },
            769: {
                spaceBetween: 16,
                slidesPerView: 2,
            },
            576: {
                spaceBetween: 16,
                slidesPerView: 2,
            },
            100: {
                centeredSlides: true,
                slidesPerView: 'auto',
            },
        },
    });
};
