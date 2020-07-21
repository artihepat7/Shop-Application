import { deleteProduct } from "./product_management";
import { addToCartfunction } from "./Add_To_Cart";

export function rendering(products) {
  const ul = document.getElementById("product-list");
  ul.innerHTML = "";
  products.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${element.title}</h2>
          <p>${element.price}</p>
      `;
    const deleteBtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    addToCartBtn.textContent = "Add To Cart";
    li.appendChild(deleteBtn);
    li.appendChild(addToCartBtn);
    ul.appendChild(li);

    // deleteBtn.addEventListener("click", (event) => {
    //   console.log(element.id);
    //   event.target.closest("li").remove();
    // });

    deleteBtn.addEventListener("click", deleteProduct.bind(this, element.id));
    addToCartBtn.addEventListener("click", addToCartfunction.bind(this,element.id));
  });
}
