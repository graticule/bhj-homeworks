class Rotator {
    constructor(rotator){
        this.rotator = rotator;
        this.cases = Array.from(this.rotator.children);
        this.getNext = this.getNext.bind(this);
        this.active = 0;
    }

    getNext() {
        this.deactivate(this.active);
        this.active = (this.active + 1) % this.cases.length;
        this.activate(this.active);
    }

    deactivate(index) {
        this.cases[index].classList.remove('rotator__case_active');
    }

    activate(index) {
        this.cases[index].classList.add('rotator__case_active');
    }
 }

Array.from(document.querySelectorAll('.rotator'))
.map(e => new Rotator(e))
.forEach( rotator => {
    setInterval(rotator.getNext, 1000)
}
)