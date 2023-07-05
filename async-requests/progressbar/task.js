const form = document.forms.form;
const progress = document.getElementById('progress');
const url = 'https://students.netoservices.ru/nestjs-backend/upload';

form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded/e.total;
    })
    xhr.open('POST', url, true);
    xhr.send(formData);
})