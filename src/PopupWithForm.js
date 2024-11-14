import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement = this.popupElement.querySelector("form");
    this.submitButton = this.formElement.querySelector(".popup__button-submit");
    this.submitButtonText = this.submitButton.textContent;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this.submitButton.textContent = "Guardando...";
    } else {
      this.submitButton.textContent = this.submitButtonText;
    }
  }

  _getInputValues() {
    let values = {};
    const inputList = this.formElement.querySelectorAll("input");
    inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}
