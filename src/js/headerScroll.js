export const useHeaderScroll = () => {
    document.addEventListener('DOMContentLoaded', function () {
        let lastScrollTop = 0;
        const menu = document.querySelector('[data-menu="fixed-menu"]');

        window.addEventListener(
            'scroll',
            function () {
                let currentScroll =
                    window.scrollY || document.documentElement.scrollTop;

                if (currentScroll > lastScrollTop) {
                    // Скролл вниз
                    menu.setAttribute('data-state', 'hidden');
                } else if (currentScroll < lastScrollTop && currentScroll > 0) {
                    // Скролл вверх
                    menu.setAttribute('data-state', 'visible');
                } else if (currentScroll === 0) {
                    // В начале страницы
                    menu.setAttribute('data-state', 'default');
                }

                // Обновляем lastScrollTop
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных или отрицательных значений
            },
            false,
        );
    });
};
