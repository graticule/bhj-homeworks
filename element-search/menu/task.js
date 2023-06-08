const menuLinks = document.getElementsByClassName('menu__link');

const closeDropdowns = () => {
    const dropdowns = Array.from(document.getElementsByClassName("menu_active"));
    dropdowns.forEach(element => {
        element.classList.remove('menu_active');
    });
};

[...menuLinks].forEach(element => {
    element.onclick = (event) => {
        closeDropdowns();
        const dropdownMenu = element.closest('.menu__item').querySelector('.menu');
        if (dropdownMenu) {
            event.preventDefault();
            dropdownMenu.classList.add('menu_active')
        }
    }
});