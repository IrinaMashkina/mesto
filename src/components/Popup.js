// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
import {ESCAPE_KEY_CODE} from '../utils/constants.js'

export default class Popup {
    constructor(selector) {
        this._selector = selector;
        this._element = document.querySelector(this._selector);
        this._closeButton = this._element.querySelector('.popup__close-button');
    }
    open() {
        this._element.classList.add('popup_opened'); 
        this.setEventListeners();
      }
    
    close() {
        this._element.classList.remove('popup_opened');
        this._element.removeEventListener('click', this._handleOverlayClose);
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt) {
        if(evt.keyCode == ESCAPE_KEY_CODE) {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        const targetItem = evt.target;
        if (targetItem.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close()})
        this._element.addEventListener('click', (evt) => this._handleOverlayClose(evt));
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
}