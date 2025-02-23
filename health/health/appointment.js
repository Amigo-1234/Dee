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

