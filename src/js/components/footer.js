export const useFooter = () => {
    document.querySelectorAll('.footer__item-title').forEach(function (title) {
        title.addEventListener('click', function (event) {
            event.preventDefault();
            var currentSubitem = document.querySelector(
                `[data-id="footer__subitem-${title.getAttribute('data-id').split('-').pop()}"]`,
            );
            var svgIcon = title.querySelector('svg');

            document
                .querySelectorAll('.footer__subitem')
                .forEach(function (subitem) {
                    if (subitem !== currentSubitem) {
                        subitem.style.maxHeight = null;
                        subitem.classList.remove('open');
                        subitem.previousElementSibling
                            .querySelector('svg')
                            .classList.remove('rotate');
                    }
                });

            if (currentSubitem.classList.contains('open')) {
                currentSubitem.style.maxHeight = null;
                currentSubitem.classList.remove('open');
                svgIcon.classList.remove('rotate');
            } else {
                currentSubitem.style.maxHeight =
                    currentSubitem.scrollHeight + 'px';
                currentSubitem.classList.add('open');
                svgIcon.classList.add('rotate');
            }
        });
    });
};
