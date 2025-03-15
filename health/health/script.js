
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

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.home-slide');
let currentIndex = 0;

// Slide every 4 seconds, stop at the last image
const slideInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex < slides.length) {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else {
        clearInterval(slideInterval); // Stop sliding at the last image
    }
}, 4000); // 4 seconds per slide