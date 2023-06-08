const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));
const arrowNext = document.querySelector(".slider__arrow_next");
const arrowPrev = document.querySelector(".slider__arrow_prev");

const selectCurrentSliderItem = (index) => {
    const current = document.querySelector('.slider__item_active');
    if (current) {
        current.classList.remove('slider__item_active');
    }
    sliderItems[index].classList.add('slider__item_active');
}

const selectCurrentSliderDot = (index) => {
    const current = document.querySelector('.slider__dot_active');
    if (current) {
        current.classList.remove('slider__dot_active');
    }
    sliderDots[index].classList.add('slider__dot_active');
}

const updateSlider = (index) => {
    selectCurrentSliderItem(index);
    selectCurrentSliderDot(index);
}

const shiftSlider = (step) => {
    let currentSliderItem = sliderItems.findIndex((element) => {
        return element.classList.contains('slider__item_active')
    });
    currentSliderItem = (currentSliderItem + sliderItems.length + step) % sliderItems.length;
    updateSlider(currentSliderItem);
}

const getNextItem = () => {
    shiftSlider(1);
}

const getPrevItem = () => {
    shiftSlider(-1);
}

arrowNext.onclick = getNextItem;
arrowPrev.onclick = getPrevItem;

for(let i=0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = () => {
        updateSlider(i)
    }
}

updateSlider(0);