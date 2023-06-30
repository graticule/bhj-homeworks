function checkChild(element) {
    const childUl = element?.closest('li')?.querySelector('ul');
    if (childUl !== null) {
        const children = Array.from(childUl.querySelectorAll('.interest__check'));
        element.indeterminate = false;
        [...children].forEach((el) => {
            el.checked = element.checked;
            el.indeterminate = false;
        })
    }
}

function checkParent(element) {
    const childUl = element?.closest('li')?.querySelector('ul');
    if (childUl !== null) {
        const children = Array.from(childUl.querySelectorAll('.interest__check'));
        if (children.length > 0) {
            if ([...children].every(el => el.checked === true)) {
                element.indeterminate = false;
                element.checked = true
            } else if ([...children].some(el => el.checked === true)) {
                element.checked = false;
                element.indeterminate = true;
            } else {
                element.indeterminate = false;
                element.checked = false;
            }
        }
    }
    const parentLi = element?.closest('ul')?.closest('li');
    if (parentLi !== null) {
        const parent = parentLi?.querySelector('.interest__check');
        if (parent !== null) {
            checkParent(parent);
        }
    }
}

const interests = document.querySelectorAll('.interest__check');

console.log(interests.length);

[...interests].forEach(el => {
    el.checked = false;
    el.addEventListener('change', () => {
        checkChild(el);
        checkParent(el);
    })
})