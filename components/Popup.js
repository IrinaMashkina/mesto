// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
export default class Popup {
    constructor(selector) {
        this._selector = selector;
        this._popup = document.querySelector(this._selector);
    }
    open() {
        this._popup.classList.add('popup_opened'); 
        this.setEventListeners();
      };
    
    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('click', closeOverlayPopup);
        document.removeEventListener('keydown', closeEscPopup);
    }
    _handleEscClose(evt) {
        if(evt.keyCode == ESCAPE_KEY_CODE) {
            this.close();
          }
    }
    setEventListeners() {
        this._popup.addEventListener('click', handleOverlayClose);
        document.addEventListener('keydown',this._handleEscClose);
    }
}