const modal = document.getElementById('modal_main');
const success = document.getElementById('modal_success');

modal.classList.add('modal_active');

modalCloses = document.getElementsByClassName('modal__close');

[...modalCloses].forEach(element => {
    element.onclick = () => {
        const active = element.closest('.modal_active');
        active.classList.remove('modal_active');
        if( element.classList.contains('show-success')){
            success.classList.add('modal_active');
        }
    }
});