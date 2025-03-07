// Sliding Background Animation
let index = 0;
const slides = document.querySelector('.slides');

function slideShow() {
    index++;
    if (index > 5) index = 0;
    slides.style.transform = `translateX(-${index * 100}vw)`;
}
setInterval(slideShow, 2000); // Change every 2 seconds

// Responsive Navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
