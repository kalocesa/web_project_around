/*Crea la clase Card, que produce una tarjeta con texto y un enlace a la imagen, 
siguiendo estos requisitos:

Toma los datos de la tarjeta (tanto el texto como un enlace a la imagen) y 
un selector de elemento de plantilla como parámetros en el constructor.

Dispone de métodos privados para trabajar con el marcado y añadir detectores 
de eventos.

Tiene métodos privados para cada controlador de eventos.

Tiene un método público que devuelve un elemento card completamente funcional
 y lleno de datos.

 Crea una instancia de la clase Card para cada tarjeta.*/
class Card {
  constructor(data, cardSelector) {}
}

export const initialCards = [
  {
    name: "Bellas Artes, CDMX",
    link: "https://images.unsplash.com/photo-1547686669-9a8cb1a22d91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cabo San Lucas, B.C.S.",
    link: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chichén Itzá, Yuc.",
    link: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "San Pedro Cholula, Pue.",
    link: "https://images.unsplash.com/photo-1473726867722-6b8a5e529d76?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cañon del Sumidero, Chis.",
    link: "https://images.unsplash.com/photo-1630465711172-4d987f3fd9c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Janos, Chih.",
    link: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxaOFBqZHhJTnBBOHx8ZW58MHx8fHx8",
  },
];

//Función para crear las 6 tarjetas a partir de un template
//Se añaden en el orden de la variable intialCards
export function createCard(name, link) {
  const templateCard = document.querySelector(".template");
  //estoy clonando toda la informaciòn que contenga el elemento "element" en html
  const cardElement = templateCard.content
    .querySelector(".element")
    .cloneNode(true);
  //igualo el contenido del elemento image al valor de link de la variable "initialCards"
  cardElement.querySelector(".element__image").src = link;
  //igualo el contenido del elemento image al valor de link de la variable "initialCards"
  cardElement.querySelector(".element__text").textContent = name;

  //Al dar click a trash se elimina la tarjeta
  cardElement
    .querySelector(".element__button-trash")
    .addEventListener("click", function () {
      cardElement.remove();
    });
  //Al dar click a buttonLike se genera un like o dislike
  cardElement
    .querySelector(".element__button-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__button-dislike");
    });
  return cardElement;
}

//Variables para crear las tarjetas, guardarlas, darle like y borrarlas
export const cardsContainer = document.querySelector(".elements");
//Formar un bucle para que se tomen los datos del objeto y se agreguen conforme al orden de apariciòn
//Función para crear las 6 tarjetas sin escribir tanto código
initialCards.forEach(function (element) {
  const newCard = createCard(element.name, element.link);
  cardsContainer.append(newCard);
});
