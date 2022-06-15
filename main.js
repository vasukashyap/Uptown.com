// hamburger 
const hamburger = document.querySelector(".hamburger");
const List = document.querySelector(".list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  List.classList.toggle("active");
}
const list = document.querySelectorAll(".list");

list.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    List.classList.remove("active");
};
// hamburger 

// sticky-navbar 
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// sticky-navbar 

$(document).ready(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    568: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

AOS.init();