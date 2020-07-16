//import { products } from "./product_management";

export function rendering(products) {
  console.log("printing");

  const ul = document.getElementById("product-list");
  products.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${element.title}</h2>
          <p>${element.price}</p>
      `;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    deleteBtn.addEventListener("click", (event) => {
      console.log(element.id);
      event.target.closest("li").remove();
    });
  });
}
