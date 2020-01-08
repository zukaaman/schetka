// for service

var serviceButton = document.querySelector(".service__item-button");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");

serviceButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--active");
  modalOverlay.classList.add("modal-overlay--active");
});
