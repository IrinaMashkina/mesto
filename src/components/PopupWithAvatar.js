import PopupWithForm from './PopupWithForm';


export default class PopupWithAvatar extends PopupWithForm {
    constructor(selector, {handleFormSubmit, inputValues, validator}) {
        super(selector, {handleFormSubmit, inputValues, validator});
        this._element  = document.querySelector(selector);
        this._buttonSubmit = this._element.querySelector('.popup__submit');
        this._input = this._element.querySelector('.popup__input')
    }
   setEventListeners() {
       super.setEventListeners();
   }
   _getInputValues() {
 
       return this._input.value;

   }

}