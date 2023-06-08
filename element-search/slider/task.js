const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));
const arrowNext = document.querySelector(".slider__arrow_next");
const arrowPrev = document.querySelector(".slider__arrow_prev");

let currentSliderItem = 0;

const selectCurrentSliderItem = () => {
    const current = document.querySelector('.slider__item_active');
    if (current) {
        current.classList.remove('slider__item_active');
    }
    sliderItems[currentSliderItem].classList.add('slider__item_active');
}

const selectCurrentSliderDot = () => {
    const current = document.querySelector('.slider__dot_active');
    if (current) {
        current.classList.remove('slider__dot_active');
    }
    sliderDots[currentSliderItem].classList.add('slider__dot_active');
}

const updateSlider = () => {
    selectCurrentSliderItem();
    selectCurrentSliderDot();
}

const shiftSlider = (step) => {
    currentSliderItem += step;
    currentSliderItem = (currentSliderItem + sliderItems.length) % sliderItems.length;
    updateSlider();
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
        currentSliderItem = i;
        updateSlider()
    }
}

updateSlider();