const searchToggle = document.getElementById('search-toggle');
const searchBox = document.getElementById('search-box');
const wishlistIcon = document.querySelector('.fa-heart');
const cartCount = document.querySelector(".cart-count");

searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    searchBox.classList.toggle('show');
    searchBox.focus();
  });

  wishlistIcon.addEventListener('click', (e) => {
    e.preventDefault();
    alert("View your saved items (wishlist functionality coming soon)");
  });
  
const featuredProducts = [
    {
        name: "Classic Denim Jacket",
        price: "₦25,000",
        image: "img/denim.jpg"
    },
    {
        name: "Stylish Handbag",
        price: "₦18,000",
        image: "img/fancy bags.jpg"
    },
    {
        name: "Men’s Sneakers",
        price: "₦30,000",
        image: "img/sneakers.jpg"
    },
    {
        name: "Elegant Wristwatch",
        price: "₦50,000",
        image: "img/watch.jpg"
    }
];

// Reference to the container
const featuredContainer = document.getElementById("featured-container");

// Function to generate product cards
featuredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <a href="#" class="btn">View Product</a>
    `;

    featuredContainer.appendChild(productCard);
});

// Sample data for new arrivals
const newArrivals = [
  {
    name: "Striped Shirt",
    price: "₦14,000",
    image: "img/striped.jpg",
  },
  {
    name: "Flared Jeans",
    price: "₦19,500",
    image: "img/flare.png",
  },
  {
    name: "Linen Dress",
    price: "₦22,000",
    image: "img/linen.png",
  },
];

// Sample data for best sellers
const bestSellers = [
  {
    name: "White Sneakers",
    price: "₦18,500",
    image: "img/best1.jpg",
  },
  {
    name: "Crossbody Bag",
    price: "₦15,000",
    image: "img/best2.jpg",
  },
  {
    name: "Black Heels",
    price: "₦17,800",
    image: "img/best3.jpg",
  },
];

// Function to create product cards
function renderNewArrivals(products) {
  const container = document.getElementById("new-arrivals");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("new-arrival-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Call it during DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderNewArrivals(newArrivals);
});

//Testimonial Carousel
let current = 0;
  const cards = document.querySelectorAll(".testimonial-card");

  function showNextTestimonial() {
    cards[current].classList.remove("active");
    current = (current + 1) % cards.length;
    cards[current].classList.add("active");
  }

  setInterval(showNextTestimonial, 5000); // change every 5 seconds


