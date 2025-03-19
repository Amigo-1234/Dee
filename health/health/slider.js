document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".home-slide");
    const totalSlides = slides.length;

    function changeSlide() {
        index = (index + 1) % totalSlides;
        document.querySelector(".home-slider").style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(changeSlide, 5000); // Changes slide every 5 seconds
});
