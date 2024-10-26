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
