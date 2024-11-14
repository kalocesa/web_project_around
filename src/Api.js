class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl; //token personal y se le agregarán las direcciones de usuario o tarjeta
    this.headers = headers; // mi encabezado contiene la autorización y el Content-type: application/jason.
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getProfileInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(this.checkResponse);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then(this.checkResponse);
  }

  editProfile(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH", //método para guardar los datos en el servidor y actualizarlos.
      headers: this.headers,
      body: JSON.stringify({ name, about }),
    }).then(this.checkResponse);
  }

  avatarProfile(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH", //método para actualizar el perfil de un usuario.
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this.checkResponse);
  }

  addCards(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST", //método para enviar datos que pueden ser editados
      headers: this.headers,
      body: JSON.stringify({ name, link }),
    }).then(this.checkResponse);
  }

  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT", //actualiza el recurso, para poner el corazón de like, en vez del dislike.
      headers: this.headers,
    }).then(this.checkResponse);
  }

  dislikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE", //elimina el recurso del corazón del like y se queda en su estado original de dislike.
      headers: this.headers,
    }).then(this.checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE", //elimina la tarjeta
      headers: this.headers,
    }).then(this.checkResponse);
  }
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1", //Api de tripleten
  headers: {
    authorization: "96851234-ee2a-45b4-8c57-17478776f9e6", // mi ID personal
    "Content-Type": "application/json", // para que el servidor convierta la data en formato JSON.
  },
});
