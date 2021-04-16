export default class Api {
  constructor({ baseUrl, headers }) {
    this._URL = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._URL}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  addNewCard(data) {
    return fetch(`${this._URL}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`)
    );
  }

  deleteCard(id) {
    return fetch(`${this._URL}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) =>
      response.ok
        ? Promise.resolve("success")
        : Promise.reject(`Ошибка: ${response.status}`)
    );
  }

  editUserInfo(data) {
    return fetch(`${this._URL}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((response) =>
      response.ok
        ? Promise.resolve("success")
        : Promise.reject(`Ошибка: ${response.status}`)
    );
  }

  getUserInfo() {
    return fetch(`${this._URL}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  putLike(id) {
    return fetch(`${this._URL}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  deleteLike(id) {
    return fetch(`${this._URL}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  editAvatar(link) {
    return fetch(`${this._URL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

}
