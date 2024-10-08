/*// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

*/

//Validación de formularios
//muestra el error
const showInputError = (formElement, inputElement, errorMessage) => {
  //función para el form, input y el mensaje de error
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error"); //se le añade la clase que muestra el borde rojo
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active"); //se le añade la clase con el mensaje del input id
};
//esconde el error
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};
//valida el formulario y el input para mostrar o esconder el error
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add("popup__button-submit_disabled");
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove("popup__button-submit_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button-submit");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formConfig) => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, formConfig); //
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__input-error_active",
});
