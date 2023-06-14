const dropdowns = document.querySelectorAll('.dropdown');

[...dropdowns].forEach(element => {
    element.onclick = (event) => {
        const target = event.target;
        const list = event.currentTarget.querySelector('.dropdown__list')
        if (target.classList.contains('dropdown__value')) {
            list.classList.toggle('dropdown__list_active');
            return false;
        }
        if (target.classList.contains('dropdown__link')) {
            const value = event.currentTarget.querySelector('.dropdown__value');
            value.innerHTML = target.textContent.trim();
            list.classList.toggle('dropdown__list_active');
            return false;
        }

    }
})