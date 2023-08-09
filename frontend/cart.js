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
        let qtyOption = `<option>1</option>
        <option>2</option>
        <option>3</option>`
    }
    else if (itemQty == 2) {
        let qtyOption = `<option selected>1</option>
        <option selected>2</option>
        <option >3</option>`
    }
    else if (itemQty == 3) {
        let qtyOption = `<option selected>1</option>
        <option>2</option>
        <option selected>3</option>`
    }

    cartRow.innerHTML = `<td class="btn-x"><a href="#"><i class="far fa-times-circle"></i></a></td>
    <td><img src="./images/plants/${itemName}.png"> </td>
    <td>Alloplectus</td>
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