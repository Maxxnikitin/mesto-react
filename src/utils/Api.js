export const token = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-12',
  headers: {
    authorization: '83dedcdd-7e88-4905-85f7-b138aebc1b0b',
    'Content-Type': 'application/json'
  },
};

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`error${res.status}`);
    });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`error${res.status}`);
    });
  }

  setUserInfo(userName, userAbout) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error${res.status}`);
      });
  }

  addNewCard(cardName, cardLink) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`error${res.status}`);
    });
  }

  putLike(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    })
    .then((data) => data);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`error${res.status}`);
    });
  };

  deleteLike(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    })
    .then((data) => data);
  }

  setUserAvatar(userAvatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: userAvatar
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    })
  }
}

const api = new Api(token);
export default api;
