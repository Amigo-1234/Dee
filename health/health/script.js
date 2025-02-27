document.addEventListener("DOMContentLoaded", () => {
    function counter(id , start , end, duration){
     let obj= document.getElementById(id),
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1 ,
     step = Math.abs(Math.floor(duration / range)),
     timer = setInterval(() => {
         current += increment;
         obj.textContent = current;
         if( current == end){
             clearInterval(timer);
         }
     }, step );
    }
    counter("count1", 0  , 2567 , 3000);
    counter("count2", 100, 25, 2500);
    counter("count3", 0  , 14,3000);
    counter("count4", 0  , 4,3000);
 });
   

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