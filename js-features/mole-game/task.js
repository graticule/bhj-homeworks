function getHole(index) {
    return document.getElementById(`hole${index}`);
}

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let end = false

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {
        const hole = getHole(i);
        if ( hole.classList.contains('hole_has-mole') ){
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }
        if (Number(dead.textContent) === 10) {
            end = true;
            alert("Победа!")
        }
        if (Number(lost.textContent) === 5){
            end = true;
            alert("Вы проиграли")
        }
        if (end) {
            dead.textContent = 0;
            lost.textContent = 0;
            end = false;
        }
    }
}
