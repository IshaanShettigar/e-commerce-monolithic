const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

const img = document.getElementById("MainImg")
const p_name = document.getElementById("p-name");
const p_details = document.getElementById("p-details");
const addToCartBtn = document.getElementById('add-to-cart')
const prodQty = document.getElementById('prod-qty')
const price = document.getElementById('p-price').innerText.replace('₹ ', '')

img.src = `./images/plants/${productId}.png`
p_name.innerHTML = `${productId}`



addToCartBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let cart = localStorage.getItem('cart');
    if (!cart) { cart = [] }
    else { cart = JSON.parse(cart) }
    console.log(cart)

    // if (!Array.isArray(cart)) {
    //     console.error('Unexpected value in cart:', cart);
    //     cart = [];
    // }
    const existingProductIndex = cart.findIndex(item => item.name === productId);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += parseInt(prodQty.value);
    } else {
        cart.push({
            name: productId,
            quantity: parseInt(prodQty.value),
            price: price
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
});
