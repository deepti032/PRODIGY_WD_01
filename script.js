const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");



window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("nav-active");
}else{
navbar.classList.remove("nav-active");
}

});



menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

});
