document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  const cartContainer = document.querySelector("#cart-items");
  const cartCount = document.querySelector(".cart-count");
  const cartTotal = document.querySelector("#cart-total");

  function updateCartCount() {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
  }

  function updateCartTotal() {
    const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotal) cartTotal.textContent = total.toLocaleString();
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
  }

  function renderCart() {
    if (!cartContainer) return;

    if (Object.keys(cart).length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotal.textContent = "0.00";
      return;
    }

    cartContainer.innerHTML = "";

    Object.values(cart).forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-details">
          <h4>${item.name}</h4>
          <p>₦${item.price.toLocaleString()}</p>
          <div class="quantity-controls">
            <button class="decrease" data-id="${item.id}">−</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase" data-id="${item.id}">+</button>
          </div>
          <button class="remove-item" data-id="${item.id}">Remove</button>
        </div>
      `;

      cartContainer.appendChild(itemDiv);
    });

    attachEventListeners();
    updateCartTotal();
  }

  function attachEventListeners() {
    const increaseBtns = document.querySelectorAll(".increase");
    const decreaseBtns = document.querySelectorAll(".decrease");
    const removeBtns = document.querySelectorAll(".remove-item");

    increaseBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        cart[id].quantity += 1;
        saveCart();
        renderCart();
      });
    });

    decreaseBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        if (cart[id].quantity > 1) {
          cart[id].quantity -= 1;
        } else {
          delete cart[id];
        }
        saveCart();
        renderCart();
      });
    });

    removeBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        delete cart[id];
        saveCart();
        renderCart();
      });
    });
  }

  updateCartCount();
  renderCart();
});
