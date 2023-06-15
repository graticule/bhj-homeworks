class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');
    this.updateTimer = this.updateTimer.bind(this);

    this.updateTimer = this.updateTimer.bind(this);

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
    addEventListener("keyup", (event) => {
      switch (event.key) {
        case 'Control':
        case 'Shift':
        case 'Alt':
        case 'CapsLock':
        case 'AltGraph':
          return;
        default:
          if (this.currentSymbol.textContent.toLowerCase() === event.key.toLowerCase()) {
            this.success()
          } else {
            this.fail()
          }
      }
    }
    )

  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }
    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  updateTimer() {
    this.timerElement.innerHTML = this.timer;
    if (this.timer > 0) {
      this.timer -= 1;
    } else {
      this.fail();
    }
  }
  setNewWord() {
    clearInterval(this.timerId);

    const word = this.getWord();
    const self = this;

    this.renderWord(word);
    
    this.timer = word.length;
    this.updateTimer();
    this.timerId = setInterval(this.updateTimer, 1000);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

