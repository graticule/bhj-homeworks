const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', e => {
    console.log(xhr.readyState)
    if (xhr.readyState === xhr.DONE) {
        const result = JSON.parse(xhr.responseText);
        console.log(result);
        title.textContent = result.data.title;
        result.data.answers.forEach(element => {
            const btn = document.createElement('button');
            btn.classList.add('poll__answer');
            btn.textContent = element;
            answers.append(btn);
            btn.addEventListener('click', e => {
                e.preventDefault();
                const dialog = document.createElement('dialog');
                const closeButton = document.createElement('button');
                
                closeButton.textContent = 'Закрыть';
                closeButton.addEventListener('click', e => {
                    e.preventDefault();
                    dialog.remove();
                })
                dialog.innerHTML = `<p>Спасибо, ваш голос учтен!</p><hr>`
                dialog.insertAdjacentElement('beforeEnd', closeButton);
                document.querySelector('main').append(dialog);
                dialog.showModal();
            })
        });
    }
})

const url = 'https://students.netoservices.ru/nestjs-backend/poll';

xhr.open('GET', url);
xhr.send();