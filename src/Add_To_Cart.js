import { products } from "./product_management";

let product = products;
let addToCartArr = [];
export function addToCartfunction(prodID) {
  // console.log(prodID);
  product.forEach((element) => {
    if (element.id === prodID) {
      addToCartArr.push(element);
    }
  });

  //console.log(addToCartArr);

  renderingInAddToCart(addToCartArr);
}

let add_to_cart_list;
function renderingInAddToCart(addtocartItems) {
  //console.log(addtocartItems);
  add_to_cart_list = document.createElement("ul");
  add_to_cart_list.id = "add-to-cart-list";

  add_to_cart_list.innerHTML = "";
  addtocartItems.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h2>${element.title}</h2>
            <p>${element.price}</p>
        `;
    const pay = document.createElement("button");

    pay.textContent = "Pay";

    li.appendChild(pay);

    add_to_cart_list.appendChild(li);
  });
  alert("Item added in the cart successfully..!!!!!");
}

export function printingCartItems() {
  //console.log("printing Cart Items");
  //console.log(add_to_cart_list);
  let cartPrint = document.getElementById("cart-print");
  if (!add_to_cart_list) {
    alert("Your cart is empty");
    return;
  }
  cartPrint.innerHTML = `<div id="cart-div"><h4>Cart Items</h4></div>`;
  cartPrint.appendChild(add_to_cart_list);
}
