document.addEventListener("DOMContentLoaded", function () {
  const categorySection = document.querySelector(".category-products");
  if (!categorySection) {
    console.error("Category section not found");
    return;
  }

  const products = [
    {
      image: "img/ankara.jpg",
      name: "Ankara",
      price: "₦25,000",
    },
    {
      image: "img/women's suit.jpg",
      name: "Women's Suit",
      price: "₦50,000",
    },
    {
      image: "img/adire.jpg",
      name: "Adire",
      price: "₦25,000",
    },
    {
      image: "img/abaya.jpg",
      name: "Abaya",
      price: "₦25,000",
    },

    {
      image: "img/iro-and-buba.jpeg",
      name: "Iro and Buba Set",
      price: "₦35,000",
    },
    {
      image: "img/lace-gown.jpeg",
      name: "Lace Gown",
      price: "₦45,000",
    },
    {
      image: "img/kaftan.jpeg",
      name: "Embroidered Kaftan",
      price: "₦40,000",
    },
    {
      image: "img/wrapper-set.jpeg",
      name: "Traditional Wrapper Set",
      price: "₦30,000",
    },
    {
      image: "img/palazzo.jpeg",
      name: "Palazzo Pants Set",
      price: "₦28,000",
    },
    {
      image: "img/jumpsuit.jpeg",
      name: "African Print Jumpsuit",
      price: "₦32,000",
    },
    {
      image: "img/maxi-dress.jpeg",
      name: "Ankara Maxi Dress",
      price: "₦38,000",
    },
    {
      image: "img/blazer-set.jpeg",
      name: "Women's Blazer Set",
      price: "₦55,000",
    },
    {
      image: "img/sequin-gown.jpeg",
      name: "Evening Sequin Gown",
      price: "₦65,000",
    },
    {
      image: "img/peplum-top.jpeg",
      name: "Ankara Peplum Top",
      price: "₦22,000",
    },
    {
      image: "img/pencil-skirt.jpeg",
      name: "High-Waist Pencil Skirt",
      price: "₦20,000",
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
