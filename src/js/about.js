import '../assets/scss/about.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeaderScroll } from './headerScroll';
import { useCircleText } from './components/about/circleText';
import { useAboutSliders } from './components/about/sliders';
import { useFooter } from './components/footer';

useTheme();
useBurger();
useHeaderScroll();
useCircleText();
useAboutSliders();
useFooter();
