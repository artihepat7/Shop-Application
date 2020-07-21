import { rendering } from "./rendering";
import { addProduct, products } from "./product_management";
import { printingCartItems } from "./Add_To_Cart";

const addbtn = document.getElementById("submit-btn");
addbtn.addEventListener("click", addProduct);

const showCartBtn = document.getElementById("show-cart-btn");
showCartBtn.addEventListener("click", printingCartItems);

//Initialization of application
function initApp() {
  rendering(products);
}

initApp();
