class Cart {
    constructor(container) {
        this.container = container;
        this.items = []
    }

    addItem(product) {
        const productInCart = this.items.find(el => el.dataset.id === product.id);
        if (productInCart) {
            const counter = productInCart.querySelector('.cart__product-count');
            counter.textContent = +counter.textContent + product.count;
        } else {
            const item = document.createElement('div');
            item.classList.add('cart__product');
            item.dataset.id = product.id;
            item.innerHTML = `<img class="cart__product-image" src="${product.image}">
            <div class="cart__product-count">${product.count}</div>`
            this.items.push(item)
            this.container.append(item);
        }
    }
}

const cart = new Cart(document.querySelector('.cart__products'));

class Product {
    constructor(product){
        this.product = product;
        this.id = this.product.dataset.id;
        this.image = this.product.querySelector('.product__image').src;
        this.control = this.product.querySelector('.product__quantity-controls');
        this.incButton = this.control.querySelector('.product__quantity-control_inc');
        this.decButton = this.control.querySelector('.product__quantity-control_dec');
        this.counter = this.control.querySelector('.product__quantity-value');
        this.addButton = this.product.querySelector('.product__add');
        this.count = 1;

        this.setCounter();

        this.registerEvents();
    }

    registerEvents() {
        this.incButton.addEventListener('click', () => {
            this.setCounter(this.count + 1);
        });

        this.decButton.addEventListener('click', () => {
            const newValue = this.count - 1;
            this.setCounter(newValue < 1 ? 1 : newValue);
        });

        this.addButton.addEventListener('click', e => {
            cart.addItem(this);
            this.setCounter();
        })
    }

    setCounter(value = 1) {
        this.count = value;
        this.counter.textContent = this.count;
    }
}

products = [...document.querySelectorAll('.product')].map(el => new Product(el));