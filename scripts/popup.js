const button = document.querySelector(".profile__button-edit");
const popupNode = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");

button.addEventListener("click", function (event) {
  popupNode.classList.add("popup__open");
});

popupCloseButton.addEventListener("click", function () {
  popupNode.classList.remove("popup__open");
});
