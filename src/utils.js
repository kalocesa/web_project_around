export const nameInput = profile.elements.name;
export const aboutInput = profile.elements.description;
export const popupProfile = document.querySelector(".popup_profile");
export const cardsContainer = document.querySelector(".elements");
export const popupImage = document.querySelector(".popup_image");
export const popupAdd = document.querySelector(".popup_add");
export const formProfile = document.forms.profile;
export const formAdd = document.forms.add;

const baImage = new URL(
  "https://images.unsplash.com/photo-1547686669-9a8cb1a22d91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  import.meta.url
);
const cslImage = new URL(
  "https://images.unsplash.com/photo-1562095241-8c6714fd4178?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  import.meta.url
);
const ciImage = new URL(
  "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  import.meta.url
);
const spcImage = new URL(
  "https://images.unsplash.com/photo-1473726867722-6b8a5e529d76?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  import.meta.url
);
const csImage = new URL(
  "https://images.unsplash.com/photo-1630465711172-4d987f3fd9c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  import.meta.url
);
const jImage = new URL(
  "https://images.unsplash.com/photo-1496425745709-5f9297566b46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxaOFBqZHhJTnBBOHx8ZW58MHx8fHx8",
  import.meta.url
);

export const initialCards = [
  {
    name: "Bellas Artes, CDMX",
    link: baImage,
  },
  {
    name: "Cabo San Lucas, B.C.S.",
    link: cslImage,
  },
  {
    name: "Chichén Itzá, Yuc.",
    link: ciImage,
  },
  {
    name: "San Pedro Cholula, Pue.",
    link: spcImage,
  },
  {
    name: "Cañon del Sumidero, Chis.",
    link: csImage,
  },
  {
    name: "Janos, Chih.",
    link: jImage,
  },
];

export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disabled",
  inputErrorClass: "popup__input_type-error",
  errorClass: "popup__input-error_active",
};
