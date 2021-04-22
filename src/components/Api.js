export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    // return fetch(`${this._baseUrl}/cards`, {
      return fetch("https:/mesto.nomoreparties.co/v1/cohort-22/cards", {
      headers: this._headers,
    }).then(this.handleResponse);
  }

  addNewCard(data) {
    // return fetch(`${this._baseUrl}/cards`, {
      return fetch("https:/mesto.nomoreparties.co/v1/cohort-22/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this.handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this.handleResponse);
  }

  editUserInfo(data) {
    // return fetch(`${this._baseUrl}/users/me`, {
      return fetch("https:/mesto.nomoreparties.co/v1/cohort-22/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this.handleResponse);
  }

  getUserInfo() {
    // return fetch(`${this._baseUrl}/users/me`, {
      return fetch("https:/mesto.nomoreparties.co/v1/cohort-22/users/me", {
      headers: this._headers,
    }).then(this.handleResponse);
  }

  putLike(id) {
    // return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      return fetch("https:/mesto.nomoreparties.co/v1/cohort-22/cards/likes", {
      method: "PUT",
      headers: this._headers,
    }).then(this.handleResponse);
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this.handleResponse);
  }

  editAvatar(link) {
    // return fetch(`${this._baseUrl}/users/me/avatar`, {
      return fetch("https:/mesto.nomoreparties.co/v1/cohort-22/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      }),
    }).then(this.handleResponse);
  }

}
