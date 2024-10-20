/*Creación de la clase Popup
Crea la clase Popupque abre y cierra la ventana emergente, 
según los siguientes requisitos:
El constructor tiene un solo parámetro, que es el selector popup.
Almacena los métodos públicos open() y close() que abrirán y cerrarán el popup.
Almacena un método privado llamado _handleEscClose() que almacena la lógica 
para cerrar el popup al pulsar la tecla Esc.
Almacena un método público llamado setEventListeners() que agrega un detector 
de eventos de click al icono cerrar del popup. La ventana modal también 
debe cerrarse cuando los usuarios hacen clic en el área sombreada del formulario.
*/

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_show");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      closePopup(popupProfile);
      closePopup(popupAdd);
      closePopup(popupImage);
    }
  }

  setEventListener() {
    evt.preventDefault();
    this._element
      .querySelectorAll(".popup__background")
      .addEventListener("click", () => {
        closePopup(popupProfile);
        closePopup(popupAdd);
        closePopup(popupImage);
      });

    this._element
      .querySelectorAll(".popup__close")
      .addEventListener("click", () => {
        closePopup(popupProfile);
        closePopup(popupAdd);
        closePopup(popupImage);
      });
  }
}
