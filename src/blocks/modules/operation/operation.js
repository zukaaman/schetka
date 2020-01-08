// for operation

var operationButton = document.querySelector(".operation__button");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");

operationButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--active");
  modalOverlay.classList.add("modal-overlay--active");
});
