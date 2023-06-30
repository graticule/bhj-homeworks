const book = document.querySelector('.book');
const fsControl = document.querySelector('.book__control_font-size');
const colorControl = document.querySelector('.book__control_color');
const bgControl = document.querySelector('.book__control_background');

fsControl.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    const current = fsControl.querySelector('.font-size_active');
    if (target === current) {
        return
    }
    
    const size = target.dataset.size;
    const currentSize = current.dataset.size;

    if (currentSize) {
        book.classList.remove(`book_fs-${currentSize}`);
    }
    if (size) {
        book.classList.add(`book_fs-${size}`)
    }

    current.classList.remove('font-size_active');
    target.classList.add('font-size_active');
})

bgControl.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if (target.tagName !== 'A') {
        return;
    }
    const current = bgControl.querySelector('.color_active');
    if (target === current) {
        return
    }
    const color = target.dataset.bgColor;
    const currentColor = current.dataset.bgColor;

    book.classList.remove(`book_bg-${currentColor}`);
    book.classList.add(`book_bg-${color}`)
    
    current.classList.remove('color_active');
    target.classList.add('color_active');
})

colorControl.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if (target.tagName !== 'A') {
        return;
    }
    const current = colorControl.querySelector('.color_active');
    if (target === current) {
        return
    }
    const color = target.dataset.textColor;
    const currentColor = current.dataset.textColor;

    book.classList.remove(`book_color-${currentColor}`);
    book.classList.add(`book_color-${color}`)

    current.classList.remove('color_active');
    target.classList.add('color_active');
})