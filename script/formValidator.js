export const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
   
  };

export default class FormValidator {
    constructor (data, formElement) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
_showInputError(inputElement, errorMessage)  {
          const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
          inputElement.classList.add(this._inputErrorClass);
          errorElement.textContent = errorMessage;
          errorElement.classList.add(this._errorClass);
};
        
hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        }
        
_isValid(inputElement) {
          if(!inputElement.validity.valid) {
              this._showInputError(inputElement, inputElement.validationMessage);
          } else {
              this.hideInputError(inputElement);
          }
        };
        
_setEventListeners() {
        this.toggleButtonState();
        
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            })
        })
        };
        
enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
            this._setEventListeners();
        }
        
_hasInvalidInput()  {
         return this._inputList.some((inputElement) => {
           return !inputElement.validity.valid;
         })
        };
        
toggleButtonState()  {
         if(this._hasInvalidInput()) {
            this._buttonElement.setAttribute('disabled', true);
            this._buttonElement.classList.add(this._inactiveButtonClass);
         } else {
            this._buttonElement.removeAttribute('disabled');
            this._buttonElement.classList.remove(this._inactiveButtonClass);
         }
        };
    }


