/*Creación de la clase PopupWithForm
Crea PopupWithForm como una clase hija de Popup. 
La clase PopupWithForm debe cumplir con los siguientes requisitos:
Lleva un callback del envío del formulario al constructor, 
así como el selector popup.
Almacena un método privado llamado _getInputValues(), que 
recopila datos de todos los campos de entrada.
Modifica el método padre setEventListeners(). El método setEventListeners() 
de la clase PopupWithForm debe agregar al formulario un controlador de 
eventos submit y el detector de eventos click para el icono cerrar.
Modifica el método padre close() para reiniciar el formulario cuando 
se ha cerrado el popup.
Crea una instancia de la clase PopupWithForm para cada popup.*/

import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  _getInputValues() {}

  setEventListeners() {}
}
