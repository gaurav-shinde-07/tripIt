// Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 0,
    });
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

// Customer Reviews
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");
let x = 0;
upArrow.onclick = function(){
    if(x > "-900"){
        x = x - 300;
        slide.style.top = x + "px";
    }
}
downArrow.onclick = function(){
    if(x < 0){
        x = x + 300;
        slide.style.top = x + "px";
    }
}