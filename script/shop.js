const products = [
    {
        id: 1,
        name: "Abaya",
        price: "₦25,000",
        image: "img/abaya.jpg"
    },
    {
        id: 2,
        name: "Accessories",
        price: "₦28,000",
        image: "img/accessories.jpg"
    },
    {
        id: 3,
        name: "Adire",
        price: "₦22,500",
        image: "img/adire.jpg"
    },
    {
        id: 4,
        name: "Ankara",
        price: "₦30,000",
        image: "img/ankara.jpg"
    },
    {
        id: 5,
        name: "Denim",
        price: "₦18,500",
        image: "img/denim.jpg"
    },
    {
        id: 6,
        name: "Floral Wrap Dress",
        price: "₦25,000",
        image: "img/products/floral-dress.jpg"
    },
    {
        id: 7,
        name: "Linen Shirt",
        price: "₦17,500",
        image: "img/products/linen-shirt.jpg"
    },
    {
        id: 8,
        name: "Slim Fit Jeans",
        price: "₦20,000",
        image: "img/products/jeans.jpg"
    }
];

// Function to render products
function renderProducts() {
    const container = document.getElementById('shop-products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h4>${product.name}</h4>
            <p class="price">${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", renderProducts);