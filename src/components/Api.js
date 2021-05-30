export class Api {
  constructor({urlAddress, headers}) {
    this._urlAddress = urlAddress;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._urlAddress}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

  setUserInfo(name, description) {
    return fetch(`${this._urlAddress}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description
      })
    })
      .then(this._checkResponse);
  }

  setAvatar(avatarUrl) {
    return fetch(`${this._urlAddress}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      })
    })
      .then(this._checkResponse);
  }

  postNewCard(name, link) {
    return fetch(`${this._urlAddress}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._urlAddress}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

  likeCard(cardId, isLiked) {
    return fetch(`${this._urlAddress}/cards/likes/${cardId}`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._urlAddress}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse);
  }
}
