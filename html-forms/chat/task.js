const responses = [
    'Добрый день! До свидания!', 
    'Где ваша совесть?', 
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!', 
    'Кто тут?', 
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше.', 
]

let countDownTimer = null

const countDown = (n) => {
    n -= 1;
    if (n === 0) {
        writeBotMessage();
        n = 30;
    }
    countDownTimer = setTimeout(countDown, 1000, n)
}

const badge = document.querySelector('.chat-widget');

const input = document.getElementById('chat-widget__input');

const chat = document.getElementById('chat-widget__messages');

const chatContainer = document.querySelector('.chat-widget__messages-container');

input.addEventListener('input', () => {
    clearTimeout(countDownTimer);
    countDownTimer = setTimeout(countDown, 1000, 30)
})

badge.addEventListener('click', e => {
    if (!badge.classList.contains('chat-widget_active')){
        badge.classList.add('chat-widget_active');
        countDownTimer = setTimeout(countDown, 1000, 30)
    }
})

const writeMessage = (message, style) => {
    date = new Date();
    chat.innerHTML += 
`<div class="message ${style}">
    <div class="message__time">${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}</div>
    <div class="message__text">${message}</div>
</div >`;
    chatContainer.scroll({ 
        left: 0, 
        top: chatContainer.scrollHeight, 
        behavior: 'smooth',
    })
}

const writeBotMessage = () => {
    writeMessage(responses[Math.floor(Math.random() * responses.length)], '')
}

const handleEnter = (e) => {
    const text = input.value;
    
    if (e.key === 'Enter' && text) {
        writeMessage(text, 'message_client');
        
        // let date = new Date();
        // chat.innerHTML += `<div class="message message_client">
        //     <div class="message__time" > ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}</div >
        //         <div class="message__text">${text}</div>
        //                 </div >`;
        input.value = '';
        writeBotMessage();        
    }
}

addEventListener('keydown', handleEnter);

