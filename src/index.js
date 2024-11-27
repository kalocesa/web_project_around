import "./styles/index.css";

import {
  formAdd,
  formProfile,
  cardsContainer,
  nameInput,
  aboutInput,
  settings,
} from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import { api } from "./Api.js";

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__explorer",
  ".profile__avatar"
);

const profile = new FormValidator(formProfile, settings);
profile.enableValidation();

const add = new FormValidator(formAdd, settings);
add.enableValidation();

//POPUP PROFILE
const popupProfile = new PopupWithForm(".popup_profile", handleProfileForm);
popupProfile.setEventListeners();

const buttonProfile = document.querySelector(".profile__button-edit");
buttonProfile.addEventListener("click", () => {
  popupProfile.open();
  const profileValues = userInfo.getUserInfo();
  nameInput.value = profileValues.name;
  aboutInput.value = profileValues.about;
});

//POPUP ADD
const popupAdd = new PopupWithForm(".popup_add", (values) => {
  createCard({ name: values.title, link: values.link }, cardsContainer);
});
popupAdd.setEventListeners();

const buttonAdd = document.querySelector(".profile__content-add");
buttonAdd.addEventListener("click", () => {
  popupAdd.open();
});

//POPUP AVATAR
const popupAvatar = new PopupWithForm(".popup_avatar", handleAvatarForm);
popupAvatar.setEventListeners();

const buttonAvatar = document.querySelector(".profile__avatar-edit");
buttonAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

//POPUP DELETE
const popupDelete = new PopupWithConfirmation(".popup_delete");
popupDelete.setEventListeners();

//POPUP IMAGE
const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();

let sectionCard = null;
let currentUser = null;

function handleProfileForm({ name, description }) {
  popupProfile.renderLoading(true);
  api
    .editProfile(name, description)
    .then((profileData) => {
      userInfo.setUserInfo(profileData.name, profileData.about);
      console.log(profileData);
      popupProfile.close();
    })
    .catch((err) => console.log(`Error al actualizar el perfil: ${err}`))
    .finally(() => {
      popupProfile.renderLoading(false);
    });
}

function handleAvatarForm({ avatar }) {
  popupAvatar.renderLoading(true);
  api
    .avatarProfile(avatar)
    .then((avatarData) => {
      userInfo.setUserAvatar({ avatar: avatarData.avatar });
      popupAvatar.close();
    })
    .catch((err) => console.log(`Error al cambiar el avatar: ${err}`))
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
}

api
  .getProfileInfo()

  .then((data) => {
    const { about, name } = data;
    currentUser = data;
    userInfo.setUserInfo(name, about);
    userInfo.setUserAvatar({ avatar: data.avatar });
    api
      .getInitialCards()
      .then((cards) => {
        sectionCard = new Section(
          {
            items: cards,
            renderer: (item) => {
              const card = new Card(
                item,
                ".template",
                currentUser,
                () => {
                  popupWithImage.open(item.name, item.link);
                },
                (cardId) => {
                  api.likeCard(cardId);
                },
                (cardId) => {
                  api.dislikeCard(cardId);
                },
                (cardId, Callback) => {
                  popupDelete.setSubmitAction(() => {
                    api.deleteCard(cardId).then(() => {
                      Callback();
                      popupDelete.close();
                    });
                  });
                  popupDelete.open();
                }
              );
              return card.generateCard();
            },
          },
          cardsContainer
        );
        sectionCard.renderedItems();
      })
      .catch((err) =>
        console.log(`Error al cargar las tarjetas iniciales: ${err}`)
      );
  })
  .catch((err) =>
    console.log(`Error al obtener la información del usuario: ${err}`)
  );

function createCard(item) {
  api.addCards(item.name, item.link).then((card) => {
    const newCard = new Card(
      card,
      ".template",
      currentUser,
      () => {
        popupWithImage.open(item.name, item.link);
      },
      (cardId) => {
        api
          .likeCard(cardId)
          .catch((err) => console.log(`Error al dar "like": ${err}`));
      },
      (cardId) => {
        api
          .dislikeCard(cardId)
          .catch((err) => console.log(`Error al quitar "like": ${err}`));
      },
      (cardId, Callback) => {
        popupDelete.setSubmitAction(() => {
          api
            .deleteCard(cardId)
            .then(() => {
              Callback();
              popupDelete.close();
            })
            .catch((err) =>
              console.log(`Error al eliminar la tarjeta: ${err}`)
            );
        });
        popupDelete.open();
      }
    );
    const cardElement = newCard.generateCard();
    sectionCard.addItem(cardElement);
  });
}

/*function createCard(item) {
  const newCard = new Card(item.name, item.link, ".template", () => {
    popupWithImage.open(item.name, item.link);
  });
  const cardElement = newCard.generateCard();
  sectionCard.addItem(cardElement);
}*/

/*const popupProfile = new PopupWithForm(".popup_profile", (data) => {
  const { description, name } = data;
  userInfo.setUserInfo(name, description);
});
popupProfile.setEventListeners();*/

/*document.addEventListener("click", (evt) => {
  if (evt.target.classList == "element__button-trash") {
    popupDelete.open(evt.target);
  }
});*/
