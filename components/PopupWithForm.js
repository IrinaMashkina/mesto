// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, 
// но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
import Popup from './Popup.js'
export default class PopupWithForm extends Popup{
    constructor(selector, callback){
        super(selector);
        this._formElement = this._popup.querySelector('.popup__container');  
        this._callback = callback;
    }
    _getInputValues() {

    }
    setEventListeners() {

    }
    close()  {
      super.close();
      this._formElement.reset();
    }
}