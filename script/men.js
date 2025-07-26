document.addEventListener("DOMContentLoaded", function () {
  const categorySection = document.querySelector(".category-products");
  if (!categorySection) return;

  const cartCount = document.querySelector(".cart-count");

  // Products inserted directly in JavaScript
  const products = [
    { id: 1, image: "img/indian suit 1.jpg", name: "mc wears", price: "100000" },
    { id: 2, image: "img/indian suit 2.jpg", name: "mc wears", price: "100000" },
    { id: 3, image: "img/men blazer 1.jpeg", name: "mc wears", price: "30000" },
    { id: 4, image: "img/men blazer 2.jpg", name: "mc wears", price: "30000" },
    { id: 5, image: "img/indian suit 3.jpg", name: "mc wears", price: "100000" },
    { id: 6, image: "img/men kaftan 1.jpg", name: "mc wears", price: "45000" },
    { id: 7, image: "img/men kaftan 2.jpg", name: "mc wears", price: "50000" },
    { id: 8, image: "img/men kaftan 3.jpg", name: "mc wears", price: "45000" },
    { id: 9, image: "img/men kaftan 4.jpg", name: "mc wears", price: "50000" },
    { id: 10, image: "img/men kaftan 5.jpg", name: "mc wears", price: "45000" },
    { id: 11, image: "img/vintage smart.jpg", name: "mc wears", price: "30000" },
    { id: 12, image: "img/smart suit 1.jpg", name: "mc wears", price: "130000" },
    { id: 13, image: "img/smart suit 2.jpg", name: "mc wears", price: "100000" },];

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
