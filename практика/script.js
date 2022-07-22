(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header__nav-active');
    });
}());
