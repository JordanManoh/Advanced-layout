import Swiper from 'swiper';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export const useHomeSliders = () => {
    new Swiper('.insight__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,

        navigation: {
            nextEl: '.insight__slider-button-next',
            prevEl: '.insight__slider-button-prev',
        },
        pagination: {
            el: '.pagination',
        },

        breakpoints: {
            999: {
                spaceBetween: 32,
                slidesPerView: 2,
            },
            769: {
                spaceBetween: 16,
                slidesPerView: 2,
            },
        },
    });

    new Swiper('.testimonials__slider', {
        modules: [Navigation, Pagination, EffectFade],
        slidesPerView: 1,

        effect: 'fade',

        fadeEffect: {
            crossFade: true,
        },

        navigation: {
            nextEl: '.testimonials__slider-button-next',
            prevEl: '.testimonials__slider-button-prev',
        },
    });
};
