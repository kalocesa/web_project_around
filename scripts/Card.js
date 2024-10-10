import { openPopup, closePopup, popupImage } from "./utils.js";

export default class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__text").textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", () => {
        this._element.remove();
      });

    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__button-dislike");
      });

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        openPopup(popupImage);
        popupImage.querySelector(".popup__image").src = this._link;
        popupImage.querySelector(".popup__text").textContent = this._name;
      });
  }
}
