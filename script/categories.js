document.addEventListener("DOMContentLoaded", function () {
  const categorySection = document.querySelector(".category-products");
  if (!categorySection) return;

  const cartCount = document.querySelector(".cart-count");

  const products = [
    {id: 14, image: "img/ankara.jpg", name: "Ankara", price: "25000"},
    {id: 15, image: "img/women's suit.jpg", name: "Women's Suit", price: "50000"},
    {id: 16, image: "img/adire.jpg", name: "Adire", price: "25000"},
    {id: 17, image: "img/abaya.jpg", name: "Abaya", price: "25000"},
    {id: 18, image: "img/iro-and-buba.jpeg", name: "Iro and Buba Set", price: "35000"},
    {id: 19, image: "img/lace-gown.jpeg", name: "Lace Gown", price: "45000"},
    {id: 20, image: "img/kaftan.jpeg", name: "Embroidered Kaftan", price: "40000"},
    {id: 21, image: "img/wrapper-set.jpeg", name: "Traditional Wrapper Set", price: "30000"},
    {id: 22, image: "img/palazzo.jpeg", name: "Palazzo Pants Set", price: "28000"},
    {id: 23, image: "img/jumpsuit.jpeg", name: "African Print Jumpsuit", price: "32000"},
    {id: 24, image: "img/maxi-dress.jpeg", name: "Ankara Maxi Dress", price: "38000"},
    {id: 25, image: "img/blazer-set.jpeg", name: "Women's Blazer Set", price: "55000"},
    {id: 26, image: "img/sequin-gown.jpeg", name: "Evening Sequin Gown", price: "65000"},
    {id: 27, image: "img/peplum-top.jpeg", name: "Ankara Peplum Top", price: "22000"},
    {id: 28, image: "img/pencil-skirt.jpeg", name: "High-Waist Pencil Skirt", price: "20000"},
  ];

    // Functions for Add to Cart functionality, and to view products. We used an alertbox
  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || {};
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartDisplay() {
    const cart = getCart();
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
  }

  // The products above are added using the functions below. The view button and add to cart button included.
  function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const h3 = document.createElement("h3");
    h3.textContent = product.name;

    const p = document.createElement("p");
    p.textContent = `₦${product.price}`;

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View Details";
    viewBtn.addEventListener("click", () => {
      alert(`${product.name}\nPrice: ${product.price}`);
    });

    const cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to Cart";
    cartBtn.addEventListener("click", () => {
      const cart = getCart();
      if (cart[product.id]) {
        cart[product.id].quantity += 1;
      } else {
        cart[product.id] = {
          ...product,
          quantity: 1,
        };
      }
      saveCart(cart);
      updateCartDisplay();
    });

    productCard.appendChild(img);
    productCard.appendChild(h3);
    productCard.appendChild(p);
    productCard.appendChild(viewBtn);
    productCard.appendChild(cartBtn);

    return productCard;
  }

  products.forEach((product) => {
    const card = createProductCard(product);
    categorySection.appendChild(card);
  });

  updateCartDisplay();
});
