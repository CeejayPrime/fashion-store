document.addEventListener("DOMContentLoaded", function () {
  const shopSection = document.querySelector("#shop-products");
  if (!shopSection) return;

  const cartCount = document.querySelector(".cart-count");

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
    { id: 13, image: "img/smart suit 2.jpg", name: "mc wears", price: "100000" },
    { id: 14, image: "img/ankara.jpg", name: "Ankara", price: "25000"},
    { id: 15, image: "img/women's suit.jpg", name: "Women's Suit", price: "50000"},
    { id: 16, image: "img/adire.jpg", name: "Adire", price: "25000"},
    { id: 17, image: "img/abaya.jpg", name: "Abaya", price: "25000"},
    { id: 18, image: "img/iro-and-buba.jpeg", name: "Iro and Buba Set", price: "35000"},
    { id: 19, image: "img/lace-gown.jpeg", name: "Lace Gown", price: "45000"},
    { id: 20, image: "img/kaftan.jpeg", name: "Embroidered Kaftan", price: "40000"},
    { id: 21, image: "img/wrapper-set.jpeg", name: "Traditional Wrapper Set", price: "30000"},
    { id: 22, image: "img/palazzo.jpeg", name: "Palazzo Pants Set", price: "28000"},
    { id: 23, image: "img/jumpsuit.jpeg", name: "African Print Jumpsuit", price: "32000"},
    { id: 24, image: "img/maxi-dress.jpeg", name: "Ankara Maxi Dress", price: "38000"},
    { id: 25, image: "img/blazer-set.jpeg", name: "Women's Blazer Set", price: "55000"},
    { id: 26, image: "img/sequin-gown.jpeg", name: "Evening Sequin Gown", price: "65000"},
    { id: 27, image: "img/peplum-top.jpeg", name: "Ankara Peplum Top", price: "22000"},
    { id: 28, image: "img/pencil-skirt.jpeg", name: "High-Waist Pencil Skirt", price: "20000"},
    { id: 29, image: "img/converse.jpg", name: "Converse", price: "25000"},
    { id: 30, image: "img/boot.jpeg", name: "Classic Boot", price: "45000"},
    { id: 31, image: "img/loafers.jpeg", name: "Loafers", price: "55000"},
    { id: 32, image: "img/adidas.jpeg", name: "Classic Adidas", price: "35000"},
    { id: 33, image: "img/leather.jpg", name: "Classic Leather", price: "75000"},
    { id: 34, image: "img/boots.jpg", name: "Men Boot", price: "65000"},
    { id: 35, image: "img/nike.jpg", name: "Nike Sneakers", price: "35000"},
    { id: 36, image: "img/slides.jpeg", name: "Classic Slides", price: "25000"},
    { id: 37, image: "img/slippers.jpg", name: "Classic Slippers", price: "15000"},
    { id: 38, image: "img/xpacs.jpg", name: "Xpacs Sneaker", price: "45000"},
    { id: 39, image: "img/fabric bag.jpg", name: "Ankara fashion bag", price: "18000"},
    { id: 40, image: "img/fabric sandal.jpg", name: "Ankara fashion sandal", price: "15000"},
    { id: 41, image: "img/back to school.jpg", name: "Back to school bag", price: "80000"},
    { id: 42, image: "img/gym gloves.webp", name: "Gym gloves", price: "7000"},
    { id: 43, image: "img/cotton cap.jpg", name: "fashion cotten cap", price: "9000"},
    { id: 44, image: "img/ladies wristband.jpeg", name: "ladies leather wristband", price: "45000"},
    { id: 45, image: "img/luxury hat.webp", name: "luxury hat", price: "45000"},
    { id: 46, image: "img/Louis Vuitton shades.webp", name: "louis vuitton shades", price: "95000"},
    { id: 47, image: "img/casino wrist watch.jpeg", name: "casino wrist watch", price: "405000"},
    { id: 48, image: "img/men leather belt.jpeg", name: "men leather belt", price: "5000"},
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
    shopSection.appendChild(card);
  });

  updateCartDisplay();
});

// Function to render products
// function renderProducts() {
//     const container = document.getElementById('shop-products');
//     products.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.classList.add('product-card');
//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.name}" />
//             <h4>${product.name}</h4>
//             <p class="price">${product.price}</p>
//             <button class="add-to-cart">Add to Cart</button>
//         `;
//         container.appendChild(productCard);
//     });
// }

// // Run on page load
// document.addEventListener("DOMContentLoaded", renderProducts);