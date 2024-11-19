export default class Card {
  constructor(
    data,
    cardSelector,
    currentUser,
    handleCardClick,
    addlike,
    removelike,
    deleteCard
  ) {
    this._name = data.name;
    this._link = data.link;
    this.data = data;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this._currentUser = currentUser;
    this._addLike = addlike;
    this._removeLike = removelike;
    this._deleteCard = deleteCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  isOwner() {
    return this.data.owner === this._currentUser._id;
  }

  hasOwnerLike() {
    return this.data.isLiked;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__text").textContent = this._name;
    //mostrar cantidad de likes
    if (!this.isOwner()) {
      this._element.querySelector(".element__button-trash").style.display =
        "none";
    }
    if (this.hasOwnerLike()) {
      this._element
        .querySelector(".element__button-like")
        .classList.add("element__button-dislike");
    }
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", () => {
        this._deleteCard(this.data._id, () => {
          this._element.remove();
        });
        //
      });

    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", (evt) => {
        if (this.hasOwnerLike()) {
          this._removeLike(this.data._id);
          evt.target.classList.remove("element__button-dislike");
        } else {
          this._addLike(this.data._id);
          evt.target.classList.add("element__button-dislike");
        }
      });

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this.handleCardClick();
      });
  }
}
