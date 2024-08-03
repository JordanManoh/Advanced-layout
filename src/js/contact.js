import '../assets/scss/contact.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeaderScroll } from './headerScroll';
import { useMap } from './components/contact/map';
import { usePhone } from './components/contact/phone';
import { useForm } from './components/contact/form';
import { usePartnersSlider } from './components/partners-slide';
import { useFooter } from './components/footer';

useTheme();
useBurger();
useHeaderScroll();
useMap();
useForm();
usePhone();
usePartnersSlider();
useFooter();
