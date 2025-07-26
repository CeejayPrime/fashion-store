document.addEventListener("DOMContentLoaded", function () {
  const categorySection = document.querySelector(".category-products");
  if (!categorySection) return;

  const products = [
    {
      image: "img/men1.jpg",
      name: "Slim Fit Shirt",
      price: "₦18,000",
    },
    {
      image: "img/men2.jpg",
      name: "Classic Blazer",
      price: "₦45,000",
    },
  ];

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const h3 = document.createElement("h3");
    h3.textContent = product.name;

    const p = document.createElement("p");
    p.textContent = product.price;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";

    productCard.appendChild(img);
    productCard.appendChild(h3);
    productCard.appendChild(p);
    productCard.appendChild(button);

    categorySection.appendChild(productCard);
  });
});
