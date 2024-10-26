export default class Section {
  constructor({ items, renderer }, cardContainer) {
    console.log(cardContainer);
    this.items = items; //array de datos
    this.renderer = renderer; //funcion crea y renderiza los datos de la página.
    this.container = cardContainer; //donde se agregan los elementos de la tarjeta
  }

  renderedItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element) {
    this.container.prepend(element);
  }
}
