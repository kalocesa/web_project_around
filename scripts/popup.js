//Se requieren las variables para trabajar en el popup de añadir datos de perfil
//LISTO
const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup_profile");
const profileSubmit = document.getElementById("profile-submit");
let profileName = document.querySelector(".profile__name");
let profileExplorer = document.querySelector(".profile__explorer");
const inputName = document.querySelector(".popup__input_name");
const inputAboutMe = document.querySelector(".popup__input_aboutme");

buttonEdit.addEventListener("click", () => {
  popupProfile.classList.add("popup_show");

  inputName.value = profileName.textContent;
  inputAboutMe.value = profileExplorer.textContent;
});

profileSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileExplorer.textContent = inputAboutMe.value;

  popupProfile.classList.remove("popup_show");
});

const buttonAdd = document.querySelector(".profile__content-add");
const popupAdd = document.querySelector(".popup_add");
const addSubmit = document.getElementById("add-submit");

buttonAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup_show");
});

//Guardar información de las tarjetas, tal como el título y la url de la imagen al hacer click en el botón de guardar
//Al guardar la información debe de aparecer 1 nueva tarjeta en el primer espacio de la cuadrícula grid

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
const cardsContainer = document.querySelector(".elements");
const popupImage = document.querySelector(".popup_image");
const closeButtons = document.querySelectorAll(".popup__close");

//Realizar una funciòn para crear una tarjeta que tenga de molde el template
function createCard(name, link) {
  const templateCard = document.querySelector(".template");
  const cardElement = templateCard.content
    .querySelector(".element")
    .cloneNode(true); //estoy clonando toda la informaciòn que contenga el elemento "element" en html
  cardElement.querySelector(".element__image").src = link; //igualo el contenido del elemento image al valor de link de la variable "initialCards"
  cardElement.querySelector(".element__text").textContent = name; //igualo el contenido del elemento image al valor de link de la variable "initialCards"
  cardElement
    .querySelector(".element__image")
    .addEventListener("click", function () {
      openPopup(popupImage);
      popupImage.querySelector(".popup__image").src = link;
      popupImage.querySelector(".popup__text").textContent = name;
    });
  cardElement
    .querySelector(".element__button-trash")
    .addEventListener("click", function () {
      cardElement.remove();
    });
  cardElement
    .querySelector(".element__button-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__button-dislike");
    });
  return cardElement;
}

function openPopup(popup) {
  popup.classList.add("popup_show");
}

function closePopup(popup) {
  popup.classList.remove("popup_show");
}

//Formar un bucle para que se tomen los datos del objeto y se agreguen conforme al orden de apariciòn
initialCards.forEach(function (element) {
  const newCard = createCard(element.name, element.link);
  cardsContainer.append(newCard);
});

//crear una funcion en la cual se cierren todos los botones
closeButtons.forEach(function (element) {
  element.addEventListener("click", function () {
    closePopup(popupProfile);
    closePopup(popupAdd);
    closePopup(popupImage);
  });
});
