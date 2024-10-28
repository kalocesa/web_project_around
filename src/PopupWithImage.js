import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(imageName, imageLink) {
    super.open();
    const imageElement = this.popupElement.querySelector(".popup__image");
    const nameElement = this.popupElement.querySelector(".popup__text");

    imageElement.src = imageLink;
    imageElement.alt = imageName;
    nameElement.textContent = imageName;
  }
}
