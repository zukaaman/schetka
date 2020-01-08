// for reviews

var reviewsButton = document.querySelector(".reviews__button");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");

reviewsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--active");
  modalOverlay.classList.add("modal-overlay--active");
});

