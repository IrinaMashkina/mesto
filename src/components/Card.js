// import Api from "./Api";

export default class Card {
  constructor(
    data,
    { selector, handleCardClick, handleCardDelete },
    myId,
    api
  ) {
    this._image = data.link;
    this._caption = data.name;
    this._likes = data.likes;
    this._selector = selector;
    this.handleCardClick = handleCardClick;
    this.handleCardDelete = handleCardDelete;
    this.owner = data.owner._id;
    this.myId = myId;
    this._id = data._id;
    this._api = api;
    
  }
  // получение темплэйт карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(".template")
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
  // публичный метод для генерирования карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._countLikes = this._element.querySelector(".card__likes-count");
    this._countLikes.textContent = this._likes.length;
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
    this._element.querySelector(".card__delete").addEventListener(
      "click",
      () => {
        this.handleCardDelete({ callback: () => this._handleDelete})
        
      },
      { once: true }
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
  _removeEventListeners() {
    this._element.querySelector(".card__delete").removeEventListener(
      "click",
      () => {
        this.handleCardDelete({ callback: () => this._handleDelete})
      },
      { once: true }
    );
  }

  // удаление карточки
  _handleDelete() {
    this._element.closest(".card").remove();
    this._removeEventListeners()
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
}
