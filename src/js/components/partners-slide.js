import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export const usePartnersSlider = () => {
    new Swiper('.partners__slider', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        speed: 5000,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
};
