document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            menuBtn.checked = !menuBtn.checked;
            menu.classList.toggle('active');
        });
    }


    // Like Button Functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            // Update like count or send data to the server
        });
    });

    // Add to Cart Button Functionality
    const cartButtons = document.querySelectorAll('.cart-btn');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add item to cart logic
            alert('Item added to cart');
        });
    });

    // Search Functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            if (query) {
                // Perform search or redirect to search results page
                alert(`Searching for: ${query}`);
            }
        });
    }
});
