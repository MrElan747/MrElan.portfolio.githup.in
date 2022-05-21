
var button = document.querySelector('.mobi-nav');
var button1 = document.querySelector('.mobi-nav1');
var profile = document.querySelector('.c');
var align = document.querySelector('.test');

button.addEventListener("click", () => {

    profile.classList.toggle("display");
    menus.classList.remove("right-display");
});

button1.addEventListener("click", () => {

    profile.classList.toggle("display");

});

var button2 = document.querySelector('.nav-swap');
var button3 = document.querySelector('.nav-swap1');
var menus = document.querySelector('.right-nav');

button2.addEventListener("click", () => {

    menus.classList.toggle("right-display");
    profile.classList.remove("display");
});

button3.addEventListener("click", () => {

    menus.classList.toggle("right-display");    

});

var button_front = document.querySelector('.contact-us');
var button_ui = document.querySelector('.contact-us-ui');
var button_back = document.querySelector('.contact-us-back');
var button_logo = document.querySelector('.contact-us-logo');
var button_word = document.querySelector('.contact-us-word');
var home_button = document.querySelector('.menu-home');
var contact_button = document.querySelector('.menu-contact');
var home = document.querySelector('.main');
var contact = document.querySelector('.main1');


button_front.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
});

button_ui.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
});

button_back.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
});

button_logo.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
});

button_word.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
});

home_button.addEventListener("click", () => {

    home.classList.remove("home-hide");
    contact.classList.remove("contact-view");
    menus.classList.remove("right-display");
});

contact_button.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
    menus.classList.remove("right-display");
});