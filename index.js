let searchbtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose= document.querySelector('#form-close');
let menubar= document.querySelector('#menu-bar');
let navbar= document.querySelector('#navbar1');
let videobtn= document.querySelectorAll('.vid-btn');


searchbtn.addEventListener('click', () => {
    searchbtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll =()=>{
    searchbtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');
}


formBtn.addEventListener('click', () => {
    loginform.classList.toggle('active');
});
formclose.addEventListener('click', () => {
    loginform.classList.remove('active');
});

videobtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        console.log("btn clicked");
document.querySelector('.active').classList.remove('active');
btn.classList.add('active');
   var src1=btn.getAttribute('data-src');
   document.querySelector('#video-slider').src=src1;

    });

});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 3, // Adjust based on how many slides you want visible at once
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay:2500,
        disableOnIneraction:false,
    },
    breakpoint:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
