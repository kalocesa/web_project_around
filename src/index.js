import "./styles/index.css";

import {
  formAdd,
  formProfile,
  cardsContainer,
  nameInput,
  aboutInput,
  initialCards,
} from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import { api } from "./Api.js";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disabled",
  inputErrorClass: "popup__input_type-error",
  errorClass: "popup__input-error_active",
};

const profile = new FormValidator(formProfile, settings);
profile.enableValidation();

const add = new FormValidator(formAdd, settings);
add.enableValidation();

const popupDelete = new PopupWithConfirmation(".popup_delete");
popupDelete.setEventListeners();

document.addEventListener("click", (evt) => {
  if (evt.target.classList == "element__button-trash") {
    popupDelete.open(evt.target);
  }
});

/*const popupProfile = new PopupWithForm(".popup_profile", (data) => {
  const { description, name } = data;
  userInfo.setUserInfo(name, description);
});
popupProfile.setEventListeners();*/

const buttonProfile = document.querySelector(".profile__button-edit");
buttonProfile.addEventListener("click", () => {
  popupProfile.open();
  const profileValues = userInfo.getUserInfo();
  nameInput.value = profileValues.name;
  aboutInput.value = profileValues.about;
});

const popupAdd = new PopupWithForm(".popup_add", (values) => {
  createCard({ name: values.title, link: values.link }, cardsContainer);
});
popupAdd.setEventListeners();

const buttonAdd = document.querySelector(".profile__content-add");
buttonAdd.addEventListener("click", () => {
  popupAdd.open();
});

const popupAvatar = new PopupWithForm(".popup_avatar", () => {});
popupAvatar.setEventListeners();

const buttonAvatar = document.querySelector(".profile__avatar-edit");
buttonAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

const userInfo = new UserInfo(".profile__name", ".profile__explorer");

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();

let sectionCard = null;

api.getInitialCards().then((cards) => {
  sectionCard = new Section(
    {
      items: cards,
      renderer: (item) => {
        const card = new Card(item.name, item.link, ".template", () => {
          popupWithImage.open(item.name, item.link);
        });
        return card.generateCard();
      },
    },
    cardsContainer
  );
  sectionCard.renderedItems();
});

/*function createCard(item) {
  const newCard = new Card(item.name, item.link, ".template", () => {
    popupWithImage.open(item.name, item.link);
  });
  const cardElement = newCard.generateCard();
  sectionCard.addItem(cardElement);
}*/

function createCard(item) {
  api.addCards(item.name, item.link).then(() => {
    const newCard = new Card(item.name, item.link, ".template", () => {
      popupWithImage.open(item.name, item.link);
    });
    const cardElement = newCard.generateCard();
    sectionCard.addItem(cardElement);
  });
}

api.getProfileInfo().then((data) => {
  const { about, name } = data;
  userInfo.setUserInfo(name, about);
});

const popupProfile = new PopupWithForm(".popup_profile");
popupProfile.setEventListeners();

/*const popupProfile = new PopupWithForm(".popup_profile", (data) => {
  const { description, name } = data;
  userInfo.setUserInfo(name, description);
});
popupProfile.setEventListeners();*/
