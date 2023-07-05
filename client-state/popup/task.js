const modal = document.getElementById('subscribe-modal');
const modalCloseButton = modal.querySelector('.modal__close');

if(getCookie('subscribe-modal-close') !== 'true') {
    modal.classList.add('modal_active');
}

modalCloseButton.addEventListener('click', (e) => {
    modal.classList.remove('modal_active');
    addCookie('subscribe-modal-close','true')
})

function addCookie(name, value) {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
}

function getCookie(name) {
    const encodedName = encodeURIComponent(name);
    const result = document.cookie.split('; ').find(el => el.startsWith(encodedName + '='));
    if (result) {
        return result.substring(encodedName.length+1)
    }
    return null
}