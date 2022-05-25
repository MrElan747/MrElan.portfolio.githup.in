
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
var button4 = document.querySelector('.main-nav-swap1');
var main_menus = document.querySelector('.main-right-nav');
var menus = document.querySelector('.right-nav');

button2.addEventListener("click", () => {

    menus.classList.toggle("right-display");
    profile.classList.remove("display");
});

button3.addEventListener("click", () => {

    menus.classList.toggle("right-display");  

});

button4.addEventListener("click", () => {
    main_menus.classList.toggle("main-right-display");
    home.classList.remove("main-swap");    
    contact.classList.remove("main-swap");  
})

var button_front = document.querySelector('.contact-us');
var button_ui = document.querySelector('.contact-us-ui');
var button_back = document.querySelector('.contact-us-back');
var button_logo = document.querySelector('.contact-us-logo');
var button_word = document.querySelector('.contact-us-word');
var main_home_button = document.querySelector('.main-menu-home');
var home_button = document.querySelector('.menu-home');
var main_contact_button = document.querySelector('.main-menu-contact');
var contact_button = document.querySelector('.menu-contact');
var home = document.querySelector('.main');
var contact = document.querySelector('.main1');
var home_name = document.querySelector('.home-hide-nav');
var contact_name = document.querySelector('.contact-name-hide');



button_front.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
    contact.classList.remove("main-swap");
});

button_ui.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
    contact.classList.remove("main-swap");
});

button_back.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
    contact.classList.remove("main-swap");
});

button_logo.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
});

button_word.addEventListener("click", () => {

    home.classList.toggle("home-hide");
    contact.classList.toggle("contact-view");
    contact.classList.remove("main-swap");
});

main_home_button.addEventListener("click", () => {

    home.classList.remove("home-hide");
    home.classList.remove("main-swap");
    contact.classList.remove("contact-view");
    main_menus.classList.remove("main-right-display");
    home_name.classList.remove("contact-name-hide");
    contact_name.classList.remove("contact-name-view");
});

home_button.addEventListener("click", () => {

    home.classList.remove("home-hide");
    home.classList.remove("main-swap");
    contact.classList.remove("contact-view");
    contact.classList.remove("main-swap");
    menus.classList.remove("right-display");
});

main_contact_button.addEventListener("click", () => {

    home.classList.add("home-hide");
    contact.classList.add("contact-view");
    contact.classList.remove("main-swap");
    main_menus.classList.remove("main-right-display");
    home_name.classList.add("contact-name-hide");
    contact_name.classList.add("contact-name-view");
});

contact_button.addEventListener("click", () => {

    home.classList.add("home-hide");
    home.classList.remove("main-swap");
    contact.classList.add("contact-view");
    contact.classList.remove("main-swap");
    menus.classList.remove("right-display");
});

var button_menu = document.querySelector('.lab-menu');

button_menu.addEventListener("click", () => {

    main_menus.classList.toggle("main-right-display");
    home.classList.toggle("main-swap");
    contact.classList.toggle("main-swap");

} )