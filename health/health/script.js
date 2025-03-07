
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        if (!obj) return; // Ensure the element exists before proceeding

        let current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }

    counter("count1", 0, 2567, 3000);
    counter("count2", 100, 25, 2500);
    counter("count3", 0, 14, 3000);
    counter("count4", 0, 4, 3000);
});

// Navbar Toggle
let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-close');
        navbar.classList.toggle('add');
    });

    window.addEventListener('scroll', () => {
        navbar.classList.remove('add');
        menuIcon.classList.remove('fa-close');
    });
}

// Sliding Background Animation
let index = 0;
const slides = document.querySelector('.slides');

function slideShow() {
    index++;
    if (index > 5) index = 0;
    if (slides) {
        slides.style.transform = `translateX(-${index * 100}vw)`;
    }
}
setInterval(slideShow, 2000); // Change every 2 seconds

// Responsive Navbar
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}
