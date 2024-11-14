import Popup from "./Popup.js";

export default class PopupWhitConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.confirmButton = this.popupElement.querySelector(
      ".popup__button-submit"
    );
  }

  setSubmitAction(action) {
    this.handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();

    this.confirmButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (this.handleSubmit) {
        this.handleSubmit();
      }
    });
  }
}
