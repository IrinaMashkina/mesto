import {openPopup} from './index.js'

export default class Card {
    constructor(link, name, selector) {
       this._image = link,
       this._caption  = name,
       this._selector = selector
        }  
// получение темплэйт карточки   
_getTemplate() {
    const cardElement = document.querySelector('.template').content.querySelector('.card').cloneNode(true);  
    return cardElement;
}
// публичный метод для генерирования карточки
generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = this._alt;
    this._element.querySelector('.card__title').textContent = this._caption;
    return this._element;      
};
// слушатели карточки
_setEventListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', () => {
        this._handleDelete()});
    this._element.querySelector('.card__like').addEventListener('click', () => {
        this._likeActive()});
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._clickImage()});
    
};
// открытие "увеличения карточки"
_clickImage() {
    
    const popupImg = document.querySelector('.popup__image');
    const popupTitle = document.querySelector('.popup__title_place_pic');
    const popupPic = document.querySelector('.popup_place_pic');
    openPopup(popupPic);
    popupImg.src = this._image;
    popupImg.alt = this._caption;
    popupTitle.textContent = this._caption;
  };
// удаление карточки 
_handleDelete() {
    this._element.closest('.card').remove();
    
  };
//   Лайк
_likeActive() {
      this._element.querySelector('.card__like').classList.toggle('card__like_active');
  };
}

