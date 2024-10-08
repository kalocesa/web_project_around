/*contendrá los controladores de eventos y 
la función que abre/cierra las ventanas modales.*/

//Función para abrir el popup profile y que estén los datos de profile name y profile explorer en los input
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

//Función para abrir el popupAdd al darle click al button Add
const buttonAdd = document.querySelector(".profile__content-add");
const popupAdd = document.querySelector(".popup_add");

buttonAdd.addEventListener("click", () => {
  openPopup(popupAdd);
});

const popupImage = document.querySelector(".popup_image");
const cardImage = document.querySelector(".element__image");
cardImage.addEventListener("click", () => {
  openPopup(popupImage);
  popupImage.querySelector(".popup__image").src = link;
  popupImage.querySelector(".popup__text").textContent = name;
});

//Función para abrir los popup con la clase popup_show
function openPopup(popup) {
  popup.classList.add("popup_show");
  document.addEventListener("keydown", handleEscEvent);
}

//Función para cerrar los popup con la clase popup_show
function closePopup(popup) {
  popup.classList.remove("popup_show");
  document.removeEventListener("keydown", handleEscEvent);
}

//Variables para cerrar los popup y la tarjeta ampliada
const closeButtons = document.querySelectorAll(".popup__close");
//Funcion para cerrar todos los closeButtons al dar click
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

const formProfile = document.forms.profile;
//Función para guardar el contenido de los inputs en el formulario del perfil
//Al dar click en el botón submit se cerrará el popup
//Mientras los caracteres de los inputs no sean los correctos no se puede activar el botón de guardar
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileExplorer.textContent = aboutInput.value;

  popupProfile.classList.remove("popup_show");
});

const formAdd = document.forms.add;
//Función para crear una nueva tarjeta al darle click al id del button add-submit, se tiene que cerrar al dar click
formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleValue = event.target.elements.title.value;
  const linkValue = event.target.elements.link.value;
  const newCard = createCard(titleValue, linkValue);
  cardsContainer.prepend(newCard);
  closePopup(popupAdd);
  formAdd.reset();
});

import { cardsContainer, createCard } from "./Card.js";
