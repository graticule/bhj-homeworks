const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

const items = document.getElementById('items');

const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === xhr.OPENED) {
        const valutes = localStorage.getItem('valutes');
        if (valutes) {
            printValutes(JSON.parse(valutes));
        } else {
            loader.classList.add('loader_active');
        }
    } else if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        const result = JSON.parse(xhr.responseText);
        const valutes = result.response.Valute;
        localStorage.setItem('valutes', JSON.stringify(valutes));
        printValutes(valutes);
    }
})

function printValutes(valutes) {
    for (const el in valutes) {
        const { CharCode: charCode, Value: value } = valutes[el];
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `<div class="item__code">
                    ${charCode}
                </div>
                <div class="item__value">
                    ${Math.round(value * 1.e4) / 1.e4}
                </div>
                <div class="item__currency">
                    руб.
                </div>`
        items.append(item)
    }
}

xhr.open('GET', url);
xhr.send();
