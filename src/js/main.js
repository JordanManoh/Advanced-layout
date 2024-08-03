import '../assets/scss/main.scss';

// components

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHomeSliders } from './components/home/slider';
import { usePartnersSlider } from './components/partners-slide';
import { useHeaderScroll } from './headerScroll';
import { useFooter } from './components/footer';

useTheme();
useBurger();
useHeaderScroll();
useHomeSliders();
usePartnersSlider();
useFooter();
