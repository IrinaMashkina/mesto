export default class Card {
  constructor(
    card,
    { selector, handleCardClick, handleCardDelete },
    myInfo,
    api
  ) {
    this._image = card.link;
    this._caption = card.name;
    this._likes = card.likes;
    this._selector = selector;
    this.handleCardClick = handleCardClick;
    this.handleCardDelete = handleCardDelete;
    this.owner = card.owner._id;
    this.myId = myInfo._id;
    this._id = card._id;
    this._api = api;
    this.card = card;
  }
  // получение темплэйт карточки
  _getTemplate() {
    return document
      .querySelector(".template")
      .content.querySelector(".card")
      .cloneNode(true);
  }

  // публичный метод для генерирования карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._countLikes = this._element.querySelector(".card__likes-count");
    this._countLikes.textContent = this._likes.length;
    this._checkMyLike(this._likes);
    const pic = this._element.querySelector(".card__image");
    pic.src = this._image;
    pic.alt = this._alt;
    this._element.querySelector(".card__title").textContent = this._caption;
    if (this.owner === this.myId) {
      this._element
        .querySelector(".card__delete")
        .classList.add("card__delete_visible");
    }
    return this._element;
  }

  // слушатели карточки
  _setEventListeners() {
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () =>
        this.handleCardDelete(this._id, this._element)
      );

    this._element.querySelector(".card__like").addEventListener("click", () => {
      this._handleCardLike();
    });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this.handleCardClick();
      });
  }

  //   Лайк
  _handleCardLike() {
    const likeButton = this._element.querySelector(".card__like");
    if (likeButton.classList.contains("card__like_active")) {
      this._api
        .deleteLike(this._id)
        .then((data) => {
          this._countLikes.textContent = data.likes.length;
          likeButton.classList.remove("card__like_active");
        })
        .catch((err) => console.log(err));
    } else {
      this._api
        .putLike(this._id)
        .then((data) => {
          this._countLikes.textContent = data.likes.length;
          likeButton.classList.add("card__like_active");
        })
        .catch((err) => console.log(err));
    }
  }

 

  _checkMyLike(likes) {
    this._likeButton = this._element.querySelector(".card__like");
    const myLike = (el) => el._id === this.myId;
    if (likes.some(myLike)) {
      this._likeButton.classList.add("card__like_active");

    } else {
      this._likeButton.classList.remove("card__like_active");
    }
  }
}
