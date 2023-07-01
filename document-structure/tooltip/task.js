const elementsWithtooltip = document.querySelectorAll('.has-tooltip');

[...elementsWithtooltip].forEach(el => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = el.title;
    el.insertAdjacentElement('afterEnd', tooltip);
    el.addEventListener('click', e => {
        e.preventDefault();
        const tooltip = el.nextElementSibling;
        const {left, bottom} = el.getBoundingClientRect();
        tooltip.style.left = left + 'px';
        tooltip.style.top = bottom + 'px';

        if (!tooltip.classList.contains('tooltip_active')){
           const activeTooltip = document.querySelector('.tooltip_active')
           if (activeTooltip) {
               activeTooltip.classList.remove('tooltip_active');
           }
        }
        tooltip.classList.toggle('tooltip_active');
    })
})