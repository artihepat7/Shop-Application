import { rendering } from "./rendering";
import {addProduct, products} from "./product_management"

const addbtn = document.getElementById('submit-btn');
addbtn.addEventListener('click',addProduct);


function initApp(){
    rendering(products);
}

initApp();


 