/*Crea la clase PopupWithImage como una clase hija de Popup. 
Esta clase tiene que cambiar el método padre open(). 
En el método open() de la clase PopupWithImage, debes añadir 
una imagen al popup y el correspondiente atributo de imagen 
src junto con una leyenda para la imagen.*/

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
