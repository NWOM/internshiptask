document.addEventListener("DOMContentLoaded", function() {
    const homeForm = document.getElementById("homeForm");
    const contactForm = document.getElementById("contactForm");
    const products = document.querySelectorAll('.product');
    const modal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");

    homeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("homeName").value.trim();
        const email = document.getElementById("homeEmail").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        
        if (name === "" || email === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        const templateParams = {
            name: name,
            email: email
        };

        emailjs.send('service_mzf1w4w', 'template_aeavtx8', templateParams)
            .then(function(response) {
                alert("Thank you, " + name + "! Your form has been submitted.");
                homeForm.reset();
            }, function(error) {
                alert("There was an error submitting the form. Please try again.");
                console.error('Error:', error);
            });
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('service_mzf1w4w', 'template_aeavtx8', templateParams)
            .then(function(response) {
                document.getElementById("formResponse").innerText = "Thank you for your message!";
                contactForm.reset();
            }, function(error) {
                document.getElementById("formResponse").innerText = "There was an error submitting the form. Please try again.";
                console.error('Error:', error);
            });
    });

    products.forEach(product => {
        product.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const product = document.querySelector(`.product[data-category="${category}"]`);
            modalTitle.innerText = product.querySelector('h3').innerText;
            modalImage.src = product.querySelector('img').src;
            modalDescription.innerText = product.querySelector('p').innerText;
            modal.style.display = "block";
        });
    });

    window.closeModal = function() {
        modal.style.display = "none";
    };

    window.filterProducts = function(category) {
        products.forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });

    filterProducts('all');
});
