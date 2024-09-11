/*//Se requieren las variables para trabajar en el popup de añadir datos de perfil
//LISTO
const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.getElementById("popup-profile");
const profileSubmit = document.getElementById("profile-submit");
let profileName = document.querySelector(".profile__name");
let profileExplorer = document.querySelector(".profile__explorer");
const inputName = document.querySelector(".popup__input_name");
const inputAboutMe = document.querySelector(".popup__input_aboutme");

//Abrir formulario de editar perfil al hacer click en el boton de editar
//El texto de Name y about del perfil deben de aparecer en los placeholders al abrir el formulario
//LISTO
buttonEdit.addEventListener("click", () => {
  popupProfile.classList.add("popup__show");

  inputName.value = profileName.textContent;
  inputAboutMe.value = profileExplorer.textContent;
});

//Guardar información en el perfil al hacer click en el boton de guardar
//El texto de los placeholders debe de aparecer en la información del perfil al hacer click en el botón guardar
//Al hacer click en el botón guardar se debe de cerrar el formulario
//LISTO
profileSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileExplorer.textContent = inputAboutMe.value;

  popupProfile.classList.remove("popup__show");
});

//Se requieren las variables para trabajar en el popup de añadir tarjetas
//LISTO
const buttonAdd = document.querySelector(".profile__content-add");
const popupAdd = document.getElementById("popup-add");
const addSubmit = document.getElementById("add-submit");

//Abrir formulario de añadir tarjetas
//LISTO
buttonAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup__show");
});
*/

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

//Agregar variables para trabajar el template, tarjetas y popup
const cardsContainer = document.querySelector(".elements");
const popupImage = document.querySelector(".popup_image");
const popupProfile = document.querySelector(".popup_profile");

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

/*//Se requieren las variables para trabajar en el popup de añadir tarjetas
//LISTO
const cardElement = document.querySelector(".element");
const cardTrash = document.querySelector(".element__trash");

//Eliminar toda la tarjeta al hacer click en el icono del bote de basura
//LISTO
cardElement.addEventListener("click", function (event) {
  if (event.target.closest(".element__trash")) {
    const elementTrash = event.target.closest(".element");
    elementTrash.remove();
  }
});

//Abrir SOLO la imagen de la tarjeta al hacer click en la imagen.
//Aparece solo la imagen, el título en el footer de la misma y su botón de close

//Like al darle click al botón del corazón delineado
//LISTO
const buttonLike = document.getElementById("button-like");

buttonLike
  .querySelector(".element__button-like")
  .addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__button-dislike");
  });*/

/*//Realizar una funciòn para abrir los popup
buttonEdit.addEventListener("click", () => {
  popupProfile.classList.add("popup__open");

  inputName.value = profileName.textContent;
  inputAboutMe.value = profileExplorer.textContent;*/
