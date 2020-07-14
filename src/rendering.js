import { products } from "./product_management";


export function rendering(products) {
    console.log("printing");
   
    const ul = document.getElementById('product-list');
    ul.innerHTML ="";
    products.forEach(element => {
        //const li = document.createElement('li');
        ul.innerHTML = ul.innerHTML + `
        <li>
        <h2>${element.title}</h2>
        <p>${element.price}</p>
        <button>Delete</button>
        </li>
        
        `;
    });
    
    
  }
