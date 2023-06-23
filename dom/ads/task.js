// Повышенный уровень сложности

const activate = (element) => {
    element.classList.add('rotator__case_active')
    element.style.color = element.dataset['color'];
}

const getNext = (previous) => {
    previous.classList.remove('rotator__case_active');
    let element = previous.nextElementSibling;
    if (element === null) {
        element = previous.parentElement.firstElementChild;
    }
    activate(element);
    setTimeout(getNext, element.dataset['speed'], element);
} 

Array.from(document.querySelectorAll('.rotator'))
.forEach( rotator => {
    element = rotator.querySelector('.rotator__case_active');
    if (element === null) {
        element = rotator.firstElementChild;
    }
    activate(element);
    setTimeout(getNext, element.dataset['speed'], element);
    }
)