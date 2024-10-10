import Card from "./Card.js";
import { cardsContainer } from "./index.js";
const buttonEdit = document.querySelector(".profile__button-edit");
let profileName = document.querySelector(".profile__name");
let profileExplorer = document.querySelector(".profile__explorer");
const nameInput = profile.elements.name;
const aboutInput = profile.elements.about;
const popupProfile = document.querySelector(".popup_profile");

buttonEdit.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileExplorer.textContent;
});

const buttonAdd = document.querySelector(".profile__content-add");
const popupAdd = document.querySelector(".popup_add");

buttonAdd.addEventListener("click", () => {
  openPopup(popupAdd);
});

export function openPopup(popup) {
  popup.classList.add("popup_show");
  document.addEventListener("keydown", handleEscEvent);
}

export function closePopup(popup) {
  popup.classList.remove("popup_show");
  document.removeEventListener("keydown", handleEscEvent);
}

const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach(function (element) {
  element.addEventListener("click", function () {
    closePopup(popupProfile);
    closePopup(popupAdd);
    closePopup(popupImage);
  });
});

function handleEscEvent(evt) {
  if (evt.key === "Escape") {
    closePopup(popupProfile);
    closePopup(popupAdd);
    closePopup(popupImage);
  }
}
const overlays = document.querySelectorAll(".popup__background");

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    closePopup(popupProfile);
    closePopup(popupAdd);
    closePopup(popupImage);
  });
});

export const formProfile = document.forms.profile;
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileExplorer.textContent = aboutInput.value;

  popupProfile.classList.remove("popup_show");
});

export const formAdd = document.forms.add;
const titleInput = add.elements.title;
const linkInput = add.elements.link;
formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const newCard = new Card(titleInput.value, linkInput.value, ".template");
  const cardElement = newCard.generateCard();
  cardsContainer.prepend(cardElement);
  closePopup(popupAdd);
  formAdd.reset();
});

export const popupImage = document.querySelector(".popup_image");
