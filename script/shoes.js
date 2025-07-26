document.addEventListener("DOMContentLoaded", function () {
  const categorySection = document.querySelector(".category-products");
  if (!categorySection) return;

  const cartCount = document.querySelector(".cart-count");

  const products = [
    {id: 29, image: "img/converse.jpg", name: "Converse", price: "25000"},
    {id: 30, image: "img/boot.jpeg", name: "Classic Boot", price: "45000"},
    {id: 31, image: "img/loafers.jpeg", name: "Loafers", price: "55000"},
    {id: 32, image: "img/adidas.jpeg", name: "Classic Adidas", price: "35000"},
    {id: 33, image: "img/leather.jpg", name: "Classic Leather", price: "75000"},
    {id: 34, image: "img/boots.jpg", name: "Men Boot", price: "65000"},
    {id: 35, image: "img/nike.jpg", name: "Nike Sneakers", price: "35000"},
    {id: 36, image: "img/slides.jpeg", name: "Classic Slides", price: "25000"},
    {id: 37, image: "img/slippers.jpg", name: "Classic Slippers", price: "15000"},
    {id: 38, image: "img/xpacs.jpg", name: "Xpacs Sneaker", price: "45000"},
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

