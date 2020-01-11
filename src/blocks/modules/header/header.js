// for header

var nav = document.querySelector(".header__nav");
var navButton = document.querySelector(".header__nav-button");
var headerPhone = document.querySelector(".header__phone");

navButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("header__nav--active");
  (this).classList.toggle("header__nav-button--active");
  headerPhone.classList.toggle("header__phone--active");
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.remove("header__nav--active");
    headerPhone.classList.remove("header__phone--active");
    navButton.classList.remove("header__nav-button--active");

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
