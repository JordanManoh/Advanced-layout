import '../assets/scss/contact.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeaderScroll } from './headerScroll';
import { useMap } from './components/contact/map';
import { usePhone } from './components/contact/phone';
import { usePartnersSlider } from './components/partners-slide';
import { useFooter } from './components/footer';

useTheme();
useBurger();
useHeaderScroll();
useMap();
usePhone();
usePartnersSlider();
useFooter();
