import '../assets/scss/blog.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeaderScroll } from './headerScroll';
import { useBlogSliders } from './components/blog/sliders';
import { useFooter } from './components/footer';

useTheme();
useBurger();
useHeaderScroll();
useBlogSliders();
useFooter();
