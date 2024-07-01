import '../assets/scss/main.scss';

// components

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';

useTheme();
useBurger();

document.addEventListener('DOMContentLoaded', function () {
    var lastScrollTop = 0;
    var menu = document.querySelector('[data-menu="fixed-menu"]');

    window.addEventListener(
        'scroll',
        function () {
            var currentScroll =
                window.scrollY || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Скролл вниз
                menu.setAttribute('data-state', 'hidden');
            } else {
                // Скролл вверх
                menu.setAttribute('data-state', 'default');
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных или отрицательных значений
        },
        false,
    );
});
