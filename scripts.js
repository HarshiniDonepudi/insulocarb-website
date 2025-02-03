

 // Navbar scroll effect
 window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-wrapper');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Button Hover Animation
document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}

// // Scroll Fade-in Animation
// const fadeInElements = document.querySelectorAll('.animate-on-scroll');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in');
//         }
//     });
// });

fadeInElements.forEach(el => observer.observe(el));



// Form Validation for Contact Form
document.querySelector("#contact form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
    } else {
        alert("Your message has been sent successfully!");
        this.reset();
    }
});

