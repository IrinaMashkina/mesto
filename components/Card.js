import {openPopup} from './index.js';
import { popupImg, popupTitle, popupPic} from '../utils/constants.js'

export default class Card {
    constructor(link, name, selector, handleCardClick) {
       this._image = link,
       this._caption  = name,
       this._selector = selector
       this.handleCardClick = handleCardClick;
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
    const pic = this._element.querySelector('.card__image');
    pic.src = this._image;
    pic.alt = this._alt;
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
    this.handleCardClick();
    
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

// Преобразуйте класс Card
// Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку.