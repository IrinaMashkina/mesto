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
        this._formSelector = data.formSelector,
        this._inputSelector = data.inputSelector,
        this._submitButtonSelector = data.submitButtonSelector,
        this._inactiveButtonClass = data.inactiveButtonClass,
        this._inputErrorClass = data.inputErrorClass,
        this._errorClass = data.errorClass,
        this._formElement = formElement
    }
_showInputError(inputElement, errorMessage)  {
          const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
          inputElement.classList.add(this._inputErrorClass);
          errorElement.textContent = errorMessage;
          errorElement.classList.add(this._errorClass);
};
        
_hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        }
        
_isValid(inputElement) {
          if(!inputElement.validity.valid) {
              this._showInputError(inputElement, inputElement.validationMessage);
          } else {
              this._hideInputError(inputElement);
          }
        };
        
_setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList,buttonElement);
        
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState(inputList,buttonElement);
            })
        })
        };
        
enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
            this._setEventListeners();
        }
        
_hasInvalidInput(inputList)  {
         return inputList.some((inputElement) => {
           return !inputElement.validity.valid;
         })
        };
        
_toggleButtonState(inputList,buttonElement)  {
         if(this._hasInvalidInput(inputList)) {
            buttonElement.setAttribute('disabled', true);
            buttonElement.classList.add(this._inactiveButtonClass);
         } else {
            buttonElement.removeAttribute('disabled');
            buttonElement.classList.remove(this._inactiveButtonClass);
         }
        };
    }


