const clicker = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const perSecond = document.getElementById("clicker__per-second");

let clicks = 0;
let prev = null;

function round(x, n=0) {
    let factor = Math.pow(10, n);
    return Math.round(x * factor) / factor;
}

clicker.onclick = () => {
    let current = new Date().getTime() / 1000;
    clicks += 1;
    console.log(prev)
    if (prev) {
        console.log(current);
        perSecond.textContent = `${round(1 / (current - prev), 2)}`;
    } 
    prev = current;
    clicker.width += 20 * Math.pow(-1, clicks % 2);
    counter.textContent = clicks;
}
