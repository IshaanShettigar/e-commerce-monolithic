const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

const img = document.getElementById("MainImg")
const p_name = document.getElementById("p-name");
const p_price = document.getElementById("p-price");
const p_details = document.getElementById("p-details");

img.src = `./images/plants/${productId}.png`
p_name.innerHTML = `${productId}`


const addToCartBtn = document.getElementById('add-to-cart')
const prodQty = document.getElementById('prod-qty')
addToCartBtn.addEventListener('click', (evt) => {
    console.log("Add to cart");
    // localStorage.setItem('cart',)
    const item = localStorage.getItem('cart')
    console.log(JSON.parse(item));
    if (item) {
        if (item[productId]) {
            // item[productId] = 

        }
    }
    else {
        let cartJSON = {
            "name": productId,
            "quantity": prodQty.value
        }
        localStorage.setItem('cart', JSON.stringify(cartJSON))
    }
})
