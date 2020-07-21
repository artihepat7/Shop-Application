import { rendering } from "./rendering";

export let products = [
  {
    id: new Date("1/1/1970").toString(),
    title: "A Book",
    price: 12.99,
  },
  {
    id: new Date("1/2/1970").toString(),
    title: "A Carpet",
    price: 129.99,
  },
  {
    id: new Date("1/3/1970").toString(),
    title: "A Magic Broomstick",
    price: 599.99,
  },
  {
    id: new Date("1/4/1970").toString(),
    title: "A Bottle",
    price: 2.99,
  },
  {
    id: new Date("1/5/1970").toString(),
    title: "A T-Shirt",
    price: 29.99,
  },
];

export function addProduct(event) {
  event.preventDefault();
  const titleEl = document.getElementById("title");
  const priceEl = document.getElementById("price");

  const Title = titleEl.value;
  const Price = priceEl.value;
  if (Title.trim().length === 0 || Price.trim().length === 0) {
    alert("please enter valid details!");
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: Title,
    price: Price,
  };

  products.unshift(newProduct);
  rendering(products);
}

export function deleteProduct(prodid) {
  let updatedProducts = [];
  console.log(prodid);
  products.forEach((element) => {
    if (element.id !== prodid) {
      updatedProducts.push(element);
    }
  });
  products = updatedProducts;
  console.log(products);
  rendering(updatedProducts);

  //another approach to delete the product

  // let index = 0;
  // products.forEach((element) => {
  //   console.log(element);
  //   if (element.id === prodid) {
  //     products.splice(index, 1);
  //   }
  //   index++;
  // });
  // console.log(products);
  // rendering(products);
}
