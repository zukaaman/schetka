// for service

var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
var serviceButton = document.querySelectorAll('.service__item-button');

for (index = 0; index < serviceButton.length; index++) {
  button = serviceButton[index];
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--active");
    modalOverlay.classList.add("modal-overlay--active");
  });
}
