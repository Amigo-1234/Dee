let navbar = document.querySelector('.navbar');
 let menuIcon = document.querySelector('#menu-icon');

 menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-close');
    navbar.classList.toggle('add');
 });

 window.addEventListener('scroll', () =>{
    navbar.classList.remove('add');
    menuIcon.classList.remove('fa-close');
 });


 document.addEventListener("DOMContentLoaded", function () {
   let faqQuestions = document.querySelectorAll(".faq-question");

   faqQuestions.forEach(question => {
       question.addEventListener("click", function () {
           let answer = this.nextElementSibling;
           let icon = this.querySelector(".toggle-icon");

           if (answer.style.maxHeight) {
               answer.style.maxHeight = null;
               answer.style.padding = "0 15px";
               icon.style.transform = "rotate(0deg)";
               icon.textContent = "+";
           } else {
               answer.style.maxHeight = answer.scrollHeight + "px";
               answer.style.padding = "15px";
               icon.style.transform = "rotate(45deg)";
               icon.textContent = "−";
           }
       });
    });
});