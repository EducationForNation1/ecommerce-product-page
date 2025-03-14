function changeImage(element) {
    document.getElementById("mainImage").src = element.src;
}

function changeColor(color) {
    document.body.style.background = color;
}

let quantity = 1;
function updateQuantity(change) {
    quantity += change;
    if (quantity < 1) quantity = 1;
    document.getElementById("quantity").textContent = quantity;
    updatePrice();
}

function updatePrice() {
    let basePrice = 50;
    document.getElementById("price").textContent = (basePrice * quantity).toFixed(2);
}

function addToCart() {
    document.getElementById("cart-message").style.display = "block";
    setTimeout(() => {
        document.getElementById("cart-message").style.display = "none";
    }, 2000);
}
