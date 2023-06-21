const reveals = document.querySelectorAll('.reveal');

addEventListener('scroll', () => {
    let windowInnerHeight = window.innerHeight;
    
    [...reveals].forEach((element) => {
        let {bottom, top} = element.getBoundingClientRect();
        const isActive = element.classList.contains('reveal_active');

        if((top < 0) || (bottom > windowInnerHeight)) {
            if(isActive){
                element.classList.remove('reveal_active');
            }
        }else if(!isActive){
            element.classList.add('reveal_active');
        }
    })
})