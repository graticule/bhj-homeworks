const menuLinks = document.getElementsByClassName('menu__link');

const closeDropdowns = (menu) => {
    const dropdowns = Array.from(menu.getElementsByClassName("menu_active"));
    dropdowns.forEach(element => {
        element.classList.remove('menu_active');
    });
};

[...menuLinks].forEach(element => {
    element.onclick = () => {
        const menu = element.closest('.menu');
        closeDropdowns(menu);
        const dropdownMenu = element.closest('.menu__item').querySelector('.menu');
        if (dropdownMenu) {
            dropdownMenu.classList.add('menu_active');
            return false;
        }
    }
});