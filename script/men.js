document.addEventListener("DOMContentLoaded", function () {
  const categorySection = document.querySelector(".category-products");
  if (!categorySection) return;

  const products = [
    {
      image: "img/indian suit 1.jpg",
      name: "mc wears",
      price: "100,000",
    },
    {
      image: "img/indian suit 2.jpg",
      name: "mc wears",
      price: "100,000",
    },
    {
      image: "img/men blazer 1.jpg",
      name: "mc wears",
      price: "₦30,000",
    },
    {
      image: "img/men blazer 2.jpg",
      name: "mc wears",
      price: "₦30,000",
    },
    {
      image: "img/indian suit 3.jpg",
      name: "mc wears",
      price: "₦100,000",
    },
    {
      image: "img/men kaftan 1.jpg",
      name: "mc wears",
      price: "₦45,000",
    },
    {
      image: "img/men kaftan 2.jpg",
      name: "mc wears",
      price: "₦50,000",
    },
    {
      image: "img/men kaftan 3.jpg",
      name: "mc wears",
      price: "₦45,000",
    },
    {
      image: "img/men kaftan 4.jpg",
      name: "mc wears",
      price: "₦50,000",
    },
    {
      image: "img/men kaftan 5.jpg",
      name: "mc wears",
      price: "₦45,000",
    },
     {
      image: "img/vintage smart.jpg",
      name: "mc wears",
      price: "₦30,000",
    },
    {
      image: "img/smart suit 1.jpg",
      name: "mc wears",
      price: "₦130,000",
    },
    {
      image: "img/smart suit 2.jpg",
      name: "mc wears",
      price: "₦100,000",
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
