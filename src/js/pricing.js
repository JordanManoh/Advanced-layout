import '../assets/scss/pricing.scss';

// components

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeaderScroll } from './headerScroll';
import { useFooter } from './components/footer';
import { useCost } from './components/pricing/cost';

useTheme();
useBurger();
useHeaderScroll();
useFooter();
useCost();
