// Initialize Swiper JS

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const border = document.querySelector(".border");
const contactimage = document.querySelector(".contact-image");
const contactBubble = document.querySelector(".contact-bubble");
const navlink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("on");
    border.classList.toggle("on");
    contactimage.classList.toggle("on");
    contactBubble.classList.toggle("on");
}

for (var i = 0; i < navlink.length; i++) {
    navlink[i].addEventListener('click', mobileMenu, false);
}





// FAQ
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
