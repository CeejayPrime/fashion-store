document.addEventListener("DOMContentLoaded", function () {
  const categorySection = document.querySelector(".category-products");
  if (!categorySection) return;

  const cartCount = document.querySelector(".cart-count");

  const products = [
    {id: 39, image: "img/fabric bag.jpg", name: "Ankara fashion bag", price: "18000"},
    {id: 40, image: "img/fabric sandal.jpg", name: "Ankara fashion sandal", price: "15000"},
    {id: 41, image: "img/back to school.jpg", name: "Back to school bag", price: "80000"},
    {id: 42, image: "img/gym gloves.webp", name: "Gym gloves", price: "7000"},
    {id: 43, image: "img/cotton cap.jpg", name: "fashion cotten cap", price: "9000"},
    {id: 44, image: "img/ladies wristband.jpeg", name: "ladies leather wristband", price: "45000"},
    {id: 45, image: "img/luxury hat.webp", name: "luxury hat", price: "45000"},
    {id: 46, image: "img/Louis Vuitton shades.webp", name: "louis vuitton shades", price: "95000"},
    {id: 47, image: "img/casino wrist watch.jpeg", name: "casino wrist watch", price: "405000"},
    {id: 48, image: "img/men leather belt.jpeg", name: "men leather belt", price: "5000"},
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
