const countdown = setInterval(() => {
    let a = document.getElementById('timer');
    a.textContent = +a.textContent - 1;
    if (+(a.textContent) === 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе');
    }
}, 1000);
