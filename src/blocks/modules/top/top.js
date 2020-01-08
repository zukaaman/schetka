// for top

var topButton = document.querySelector(".top__button");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");

topButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--active");
  modalOverlay.classList.add("modal-overlay--active");
});
