let profileName = document.querySelector(".profile__name");
let profileExplorer = document.querySelector(".profile__explorer");
export const nameInput = profile.elements.name;
export const aboutInput = profile.elements.about;
export const popupProfile = document.querySelector(".popup_profile");

export const popupAdd = document.querySelector(".popup_add");

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
  formAdd.reset();
});
