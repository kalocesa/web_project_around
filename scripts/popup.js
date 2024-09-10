//Se requieren las variables para trabajar en el popup de añadir datos de perfil
const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.getElementById("popup-profile");
const popupProfileClose = document.getElementById("popup-profile-close");
const profileSubmit = document.getElementById("profile-submit");
let profileName = document.querySelector(".profile__name");
let profileExplorer = document.querySelector(".profile__explorer");
const inputName = document.querySelector(".popup__input_name");
const inputAboutMe = document.querySelector(".popup__input_aboutme");

//Abrir formulario de editar perfil al hacer click en el boton de editar
//El texto de Name y about del perfil deben de aparecer en los placeholders al abrir el formulario
buttonEdit.addEventListener("click", () => {
  popupProfile.classList.add("popup__open");

  inputName.value = profileName.textContent;
  inputAboutMe.value = profileExplorer.textContent;
});

//Guardar información en el perfil al hacer click en el boton de guardar
//El texto de los placeholders debe de aparecer en la información del perfil al hacer click en el botón guardar
//Al hacer click en el botón guardar se debe de cerrar el formulario
profileSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileExplorer.textContent = inputAboutMe.value;

  popupProfile.classList.remove("popup__open");
});

//Cerrar el formulario de editar perfil al hacer click en el botón de cerrar
popupProfileClose.addEventListener("click", () => {
  popupProfile.classList.remove("popup__open");
});

//Se requieren las variables para trabajar en el popup de añadir tarjetas
const buttonAdd = document.querySelector(".profile__content-add");
const popupAdd = document.getElementById("popup-add");
const popupAddClose = document.getElementById("popup-add-close");
const addSubmit = document.getElementById("add-submit");

//Abrir formulario de añadir tarjetas LISTO
buttonAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup__open");
});

//Guardar información de las tarjetas, tal como el título y la url de la imagen al hacer click en el botón de guardar
//Al guardar la información debe de aparecer 1 nueva tarjeta en el primer espacio de la cuadrícula grid

/*const initialCards = [
  {
    name: "Bellas Artes",
    link: "https://unsplash.com/es/fotos/foto-aerea-del-edificio-de-la-cupula-bajo-el-cielo-azul-durante-el-dia-oGRrpBX2ER4",
  },
  {
    name: "Cabo San Lucas",
    link: "https://unsplash.com/es/fotos/formacion-rocosa-en-el-oceano-fotografia-2LhCDvS_7xs",
  },
  {
    name: "Chichén Itzá",
    link: "https://unsplash.com/es/fotos/una-piramide-muy-alta-sentada-en-medio-de-un-campo-RKmnU0aHDWg",
  },
  {
    name: "San Pedro Cholula",
    link: "https://unsplash.com/es/fotos/fotografia-aerea-de-la-catedral-de-orange-8gJqRaAaKx4",
  },
  {
    name: "Cañon del Sumidero",
    link: "https://unsplash.com/es/fotos/montana-verde-y-marron-bajo-nubes-blancas-durante-el-dia-7USeQRYYh_U",
  },
  {
    name: "Janos",
    link: "https://unsplash.com/es/fotos/una-piramide-muy-alta-sentada-en-medio-de-un-campo-RKmnU0aHDWg",
  },
];*/

//Cerrar formulario de añadir tarjetass LISTO
popupAddClose.addEventListener("click", () => {
  popupAdd.classList.remove("popup__open");
});

//Se requieren las variables para trabajar en el popup de añadir tarjetas
const cardElement = document.querySelector(".element");
const cardTrash = document.querySelector(".element__trash");

//Eliminar toda la tarjeta al hacer click en el icono del bote de basura
cardElement.addEventListener("click", function (event) {
  if (event.target.closest(".element__trash")) {
    const elementTrash = event.target.closest(".element");
    elementTrash.remove();
  }
});

//Abrir SOLO la imagen de la tarjeta al hacer click en la imagen.
//Aparece solo la imagen, el título en el footer de la misma y su botón de close

//Like al darle click al botón del corazón delineado
const buttonLike = document.getElementById("button-like");

buttonLike
  .querySelector(".element__button-like")
  .addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__button-dislike");
  });
