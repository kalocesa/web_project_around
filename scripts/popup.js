//Variables del popup Profile
const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup_profile");
const profileSubmit = document.querySelector(".popup__button-submit");
let profileName = document.querySelector(".profile__name");
let profileExplorer = document.querySelector(".profile__explorer");
const formProfile = document.forms.profile;
const nameInput = profile.elements.name;
const aboutInput = profile.elements.about;
//Variables del popup Add
const buttonAdd = document.querySelector(".profile__content-add");
const popupAdd = document.querySelector(".popup_add");
const formAdd = document.forms.add;
const addSubmit = document.getElementById("add-submit");
//Variables para crear las tarjetas, guardarlas, darle like y borrarlas
const cardsContainer = document.querySelector(".elements");
const popupImage = document.querySelector(".popup_image");
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
//Variables para cerrar los popup y la tarjeta ampliada
const closeButtons = document.querySelectorAll(".popup__close");

//Función para abrir el popup profile y que estén los datos de profile name y profile explorer en los input
buttonEdit.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileExplorer.textContent;
});

//Función para abrir el popupAdd al darle click al button Add
buttonAdd.addEventListener("click", () => {
  openPopup(popupAdd);
});

//Función para guardar el contenido de los inputs en el formulario del perfil
//Al dar click en el botón submit se cerrará el popup
//Mientras los caracteres de los inputs no sean los correctos no se puede activar el botón de guardar
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileExplorer.textContent = aboutInput.value;

  popupProfile.classList.remove("popup_show");
});

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

//Función para crear las 6 tarjetas a partir de un template
//Se añaden en el orden de la variable intialCards
function createCard(name, link) {
  const templateCard = document.querySelector(".template");
  //estoy clonando toda la informaciòn que contenga el elemento "element" en html
  const cardElement = templateCard.content
    .querySelector(".element")
    .cloneNode(true);
  //igualo el contenido del elemento image al valor de link de la variable "initialCards"
  cardElement.querySelector(".element__image").src = link;
  //igualo el contenido del elemento image al valor de link de la variable "initialCards"
  cardElement.querySelector(".element__text").textContent = name;
  //Al dar click a la tarjeta se genera un popup de la imagen y el título de la misma
  cardElement
    .querySelector(".element__image")
    .addEventListener("click", function () {
      openPopup(popupImage);
      popupImage.querySelector(".popup__image").src = link;
      popupImage.querySelector(".popup__text").textContent = name;
    });
  //Al dar click a trash se elimina la tarjeta
  cardElement
    .querySelector(".element__button-trash")
    .addEventListener("click", function () {
      cardElement.remove();
    });
  //Al dar click a buttonLike se genera un like o dislike
  cardElement
    .querySelector(".element__button-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__button-dislike");
    });
  return cardElement;
}

//Formar un bucle para que se tomen los datos del objeto y se agreguen conforme al orden de apariciòn
//Función para crear las 6 tarjetas sin escribir tanto código
initialCards.forEach(function (element) {
  const newCard = createCard(element.name, element.link);
  cardsContainer.append(newCard);
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

//Validación de formularios
//muestra el error
const showInputError = (formElement, inputElement, errorMessage) => {
  //función para el form, input y el mensaje de error
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error"); //se le añade la clase que muestra el borde rojo
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active"); //se le añade la clase con el mensaje del input id
};
//esconde el error
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};
//valida el formulario y el input para mostrar o esconder el error
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add("popup__button-submit_disabled");
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove("popup__button-submit_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button-submit");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement); //
  });
};

enableValidation();
