let cart = [];

        function addToCart(name, price, image) {
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartCount = document.getElementById('cart-count');
            const totalPriceElement = document.getElementById('total-price');
            
            cartItems.innerHTML = '';
            let totalPrice = 0;

            cart.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('cart-item');
                li.innerHTML = `
                    <div class ="cart__full">
                        <div class ="cart__things">
                            <img src="${item.image}" alt="${item.name}">
                            <span>${item.name}<br>$${item.price} x ${item.quantity}</span>
                        </div>
                        <div class ="cart__gombok">
                            <button class="add" onclick="changeQuantity('${item.name}', 1)">+</button>
                            <button onclick="changeQuantity('${item.name}', -1)">-</button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(li);
                totalPrice += item.price * item.quantity;
            });

            totalPriceElement.textContent = `All : $${totalPrice}`;
            cartCount.textContent = cart.length;
        }

        document.getElementById('clear-cart').addEventListener('click', () => {
            cart = [];
            updateCart();
        });

        document.getElementById('close-cart').addEventListener('click', () => {
            const cartContainer = document.getElementById('cart-container');
            cartContainer.classList.remove('open');
        });

        document.getElementById('cart-icon').addEventListener('click', () => {
            const cartContainer = document.getElementById('cart-container');
            cartContainer.classList.toggle('open');
        });

        function removeFromCart(name) {
            cart = cart.filter(item => item.name !== name);
            updateCart();
        }

        function changeQuantity(name, change) {
            const item = cart.find(item => item.name === name);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(name);
                } else {
                    updateCart();
                }
            }
        }
