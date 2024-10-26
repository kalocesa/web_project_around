import {
  formAdd,
  formProfile,
  cardsContainer,
  nameInput,
  aboutInput,
} from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const initialCards = [
  {
    name: "Bellas Artes, CDMX",
    link: "https://images.unsplash.com/photo-1547686669-9a8cb1a22d91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cabo San Lucas, B.C.S.",
    link: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chichén Itzá, Yuc.",
    link: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "San Pedro Cholula, Pue.",
    link: "https://images.unsplash.com/photo-1473726867722-6b8a5e529d76?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cañon del Sumidero, Chis.",
    link: "https://images.unsplash.com/photo-1630465711172-4d987f3fd9c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Janos, Chih.",
    link: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxaOFBqZHhJTnBBOHx8ZW58MHx8fHx8",
  },
];

initialCards.forEach((item) => {
  const newCard = new Card(item.name, item.link, ".template", () => {
    popupWithImage.open(item.name, item.link);
  });
  const cardElement = newCard.generateCard();
  cardsContainer.append(cardElement);
});

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disabled",
  inputErrorClass: "popup__input_type-error",
  errorClass: "popup__input-error_active",
};

//popup del perfil
const popupProfile = new PopupWithForm(".popup_profile", (data) => {
  const { name, about } = data;
  userInfo.setUserInfo(name, about);
});
popupProfile.setEventListeners();

//popup de añadir tarjeta
const popupAdd = new PopupWithForm(".popup_add", (values) => {
  //el metodo que crea cada una de las cartas (values, el contenedor de las cartas)
  initialCards(values, cardsContainer);
});
popupAdd.setEventListeners();

//Abrir popup del perfil
const buttonProfile = document.querySelector(".profile__button-edit");
buttonProfile.addEventListener("click", () => {
  popupProfile.open();
  const profileValues = userInfo.getUserInfo();
  nameInput.value = profileValues.name;
  aboutInput.value = profileValues.about;
});

//Abrir popup de crear tarjetas
const buttonAdd = document.querySelector(".profile__content-add");
buttonAdd.addEventListener("click", () => {
  popupAdd.open();
});

//validación de formularios
//form del perfil
const profile = new FormValidator(formProfile, settings);
profile.enableValidation();
//form de crear tarjetas
const add = new FormValidator(formAdd, settings);
add.enableValidation();

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__explorer");
