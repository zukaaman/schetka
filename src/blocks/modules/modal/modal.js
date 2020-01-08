// for modal

var modalButton = document.querySelector(".modal__button");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--active");
  modalOverlay.classList.remove("modal-overlay--active");
});

modalOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--active");
  modalOverlay.classList.remove("modal-overlay--active");
});
