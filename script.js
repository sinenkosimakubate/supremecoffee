// Supreme Coffee - shared JavaScript
// This file has the cart code that every page needs

// get the cart from localStorage, or start with an empty one
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// saves the cart array into localStorage so it's still there next time
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// adds "qty" copies of an item into the cart
function addToCart(name, price, qty) {
    for (let i = 0; i < qty; i++) {
        cart.push({ name: name, price: price });
    }
    saveCart();
    updateCartBadge();
}

// updates the little number bubble next to "Order Now" and on the floating cart button
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const floatingCount = document.getElementById('floating-count');

    if (cart.length > 0) {
        if (badge) {
            badge.textContent = cart.length;
            badge.style.display = 'inline-block';
        }
        if (floatingCount) {
            floatingCount.textContent = cart.length;
            floatingCount.style.display = 'flex';
        }
    } else {
        if (badge) {
            badge.style.display = 'none';
        }
        if (floatingCount) {
            floatingCount.style.display = 'none';
        }
    }
}

// run this as soon as the page loads so the badge is correct
updateCartBadge();
