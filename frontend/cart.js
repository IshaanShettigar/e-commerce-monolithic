// Make calls to the local storage to fetch cart details
// logic to display the cartitems

/** Sample cart row
<tr class="cart-row">
    <td class="btn-x"><a href="#"><i class="far fa-times-circle"></i></a></td>
    <td><img src="./images/plants/alloplectus.png"> </td>
    <td>Alloplectus</td>
    <td class="base-price">₹ 199</td>
    <td><select class="qty">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </td>
    <td class="final-price">₹ 200</td>
</tr>
 */

function createCartRow(item) {
    let cartRow = document.createElement("tr")
    cartRow.className = "cart-row"
    console.log(item);
    let itemName = item.name;
    let itemPrice = item.price;
    let itemQty = item.quantity;
    console.log(itemQty, "HELLLO");
    let qtyOption = 1
    if (itemQty == 1) {
        qtyOption = `<option selected>1</option>
        <option>2</option>
        <option>3</option>`
    }
    else if (itemQty == 2) {
        qtyOption = `<option>1</option>
        <option selected>2</option>
        <option >3</option>`
    }
    else if (itemQty == 3) {
        qtyOption = `<option >1</option>
        <option>2</option>
        <option selected>3</option>`
    }

    cartRow.innerHTML = `<td class="btn-x"><a href="#"><i class="far fa-times-circle"></i></a></td>
    <td><img src="./images/plants/${itemName}.png"> </td>
    <td>${itemName}</td>
    <td class="base-price">₹ ${itemPrice}</td>
    <td><select class="qty">
        ${qtyOption}
        </select>
    </td>
    <td class="final-price">₹ ${itemPrice}</td>
    `
    return cartRow;
}

function populateCart() {
    let cartBody = document.getElementById('cart-body')
    let cart = localStorage.getItem('cart');
    if (!cart) { cart = [] }
    else { cart = JSON.parse(cart) }
    console.log(cart);

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]
        const cartRow = createCartRow(item)
        cartBody.appendChild(cartRow)
    };
}

populateCart()

// Build the logic to update cart item subtotal based on quantity


// Build the logic to update cart total
function updateCartSubtotal() {
    let cart = localStorage.getItem('cart');
    if (!cart) { cart = [] }
    else { cart = JSON.parse(cart) }

    let cartSubtotal = document.getElementById('subtotal-display')
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]
        total += parseInt(item.price);
    };
    cartSubtotal.innerHTML = total;

    let cartTotal = document.getElementById("cart-total")
    cartTotal.innerHTML = total + 50
}

updateCartSubtotal()


// adding an event listener for the remove button on each cartRow

function removeItem() {
    let cart = localStorage.getItem('cart')
    if (!cart) { cart = [] }
    else { cart = JSON.parse(cart) }

    console.log(cart);
    // THIS FUNCTION IS INCOMPLETE PLEASE COMPLETE IT
}

let btnX = document.getElementsByClassName('btn-x')
for (let i = 0; i < btnX.length; i++) {
    btnX[i].addEventListener("click", removeItem)
}