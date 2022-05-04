
var button = document.querySelector('.mobi-nav');
var profile = document.querySelector('.c');
var align = document.querySelector('.test');

button.addEventListener("click", () => {

    profile.classList.toggle("display");
    align.classList.toggle("over");
})