const buttonEdit = document.querySelector(".profile__button-edit");
const popupNode = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__button-close");
const popupForm = document.querySelector("popup__form");
const buttonSubmit = document.querySelector(".popup__button-submit");
let profileName = document.querySelector(".profile__name");
let profileExplorer = document.querySelector(".profile__explorer");
const inputName = document.querySelector(".popup__input_name");
const inputAboutMe = document.querySelector(".popup__input_aboutme");

buttonEdit.addEventListener("click", () => {
  popupNode.classList.add("popup__open");

  inputName.value = profileName.textContent;
  inputAboutMe.value = profileExplorer.textContent;
});

popupCloseButton.addEventListener("click", () => {
  popupNode.classList.remove("popup__open");
});

buttonSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileExplorer.textContent = inputAboutMe.value;

  popupNode.classList.remove("popup__open");
});
