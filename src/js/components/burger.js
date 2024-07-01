export const useBurger = () => {
    const burgerBtn = document.querySelector('[data-burger="btn"]');
    const burgerMenu = document.querySelector('[data-burger="menu"]');
    const overlay = document.querySelector('[data-burger="overlay"]');
    const body = document.body;

    const closeBurgerMenu = () => {
        burgerBtn.classList.remove('burger--active');
        burgerMenu.classList.remove('header__right--visible');
        overlay.classList.remove('overlay--visible');
        body.classList.remove('no-scroll'); // Убираем блокировку скролла
    };

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger--active');
        burgerMenu.classList.toggle('header__right--visible');
        overlay.classList.toggle('overlay--visible');
        body.classList.toggle('no-scroll'); // Добавляем или убираем блокировку скролла
    });

    overlay.addEventListener('click', closeBurgerMenu);
};
