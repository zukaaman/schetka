// for contacts

ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [61.254925335441236,73.3839055],
    zoom: 17,
    controls: []
  });
});

var contactsButton = document.querySelector(".contacts__button");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--active");
  modalOverlay.classList.add("modal-overlay--active");
});
