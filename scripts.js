

// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
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

// Scroll Fade-in Animation
const fadeInElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

fadeInElements.forEach(el => observer.observe(el));

// Counter Animation (Stats Section)
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

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

