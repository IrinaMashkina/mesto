


  const formElement = document.querySelector('.popup__form');
  const inputElement = formElement.querySelector('.popup__input');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

function showInputError(formElement, inputElement, errorMessage)  {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add('popup__input_type_error');
      errorElement.textContent = errorMessage;
      errorElement.classList.add('popup__input-error_active');
  };

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = "";
    errorElement.classList.remove('popup__input-error_active');
  }

function isValid(formElement, inputElement) {
      if(!inputElement.validity.valid) {
          showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
          hideInputError(formElement, inputElement);
      }
};

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formElement);
    })
};


 function hasInvalidInput(inputList)  {
     return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
     })
 };

 function toggleButtonState(inputList, buttonElement)  {
     if(hasInvalidInput(inputList)) {
         buttonElement.setAttribute('disabled', true);
         buttonElement.classList.add('popup__submit_disabled');
     } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove('popup__submit_disabled');
     }
 };

 enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });