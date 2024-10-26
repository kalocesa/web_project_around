export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
  }

  open() {
    this.popupElement.classList.add("popup_show");
    this._handleEscClose();
  }

  close() {
    this.popupElement.classList.remove("popup_show");
  }

  _handleEscClose() {
    document.addEventListener("keyup", (evt) => {
      if (evt.key === "Escape") {
        this.popupElement.classList.remove("popup_show");
      }
    });
  }

  setEventListeners() {
    const closeButton = this.popupElement.querySelector(".popup__close");
    closeButton.addEventListener("click", () => {
      this.close();
    });

    const closeBackground =
      this.popupElement.querySelector(".popup__background");
    closeBackground.addEventListener("click", () => {
      this.close();
    });
  }
}
