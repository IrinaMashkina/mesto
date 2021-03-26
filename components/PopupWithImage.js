// // Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке.
import Popup from './Popup.js'
export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
       
    }
    open() {
        popupImg.src = this._image;
        popupImg.alt = this._caption;
        popupTitle.textContent = this._caption;
    }
}