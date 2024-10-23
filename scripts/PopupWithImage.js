/*Crea la clase PopupWithImage como una clase hija de Popup. 
Esta clase tiene que cambiar el método padre open(). 
En el método open() de la clase PopupWithImage, debes añadir 
una imagen al popup y el correspondiente atributo de imagen 
src junto con una leyenda para la imagen.*/

import Popup from "./Popup.js";

export const popupImage = document.querySelector(".popup_image");

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image");
    this._text = this._popupElement.querySelector(".popup__text");
  }

  open() {
    super.open();
    this._popupElement
      .querySelector(".element__image")
      .addEventListener("click", () => {
        popupImage.src = this._image;
        popupImage.textContent = this._text;
      });
  }

  close() {
    super.close();
  }
}
