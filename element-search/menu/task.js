const menuLinks = document.getElementsByClassName('menu__link');

const closeDropdowns = (menu) => {
    const dropdowns = Array.from(menu.getElementsByClassName("menu_active"));
    dropdowns.forEach(element => {
        element.classList.remove('menu_active');
    });
};

const hasActiveDropdown = (element) => {
    return element.closest('.menu__item').querySelector('.menu_active');
}

const hasDropdown = (element) => {
    return element.closest('.menu__item').querySelector('.menu');
}

[...menuLinks].forEach(element => {
    element.onclick = () => {
        const activeDropdown = hasActiveDropdown(element);
        if (activeDropdown) {
            activeDropdown.classList.remove('menu_active')
            return false;
        }
        const menu = element.closest('.menu');
        closeDropdowns(menu);
        const dropdown = hasDropdown(element);
        if (dropdown) {
            dropdown.classList.add('menu_active');
            return false;
        }
    }
});