// Создайте класс FormValidator, который настраивает валидацию полей формы:
// принимает в конструктор объект настроек с селекторами и классами формы;
// принимает вторым параметром элемент той формы, которая валидируется;
// имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
// имеет один публичный метод enableValidation, который включает валидацию формы.
// Для каждой проверяемой формы создайте экземпляр класса FormValidator.



const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

function showInputError(formElement, inputElement, errorMessage, options)  {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};

function hideInputError(formElement, inputElement, options) {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.remove(options.inputErrorClass);
errorElement.textContent = "";
errorElement.classList.remove(options.errorClass);
}

function isValid(formElement, inputElement, options) {
  if(!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, options);
  } else {
      hideInputError(formElement, inputElement, options);
  }
};

function setEventListeners(formElement, options) {
const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
const buttonElement = formElement.querySelector(options.submitButtonSelector);
toggleButtonState(inputList, buttonElement, options);

inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, options);
        toggleButtonState(inputList, buttonElement, options);
    })
})
};

function enableValidation(options) {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
    setEventListeners(formElement, options);
})
};

function hasInvalidInput(inputList)  {
 return inputList.some((inputElement) => {
   return !inputElement.validity.valid;
 })
};

function toggleButtonState(inputList, buttonElement, options)  {
 if(hasInvalidInput(inputList)) {
     buttonElement.setAttribute('disabled', true);
     buttonElement.classList.add(options.inactiveButtonClass);
 } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(options.inactiveButtonClass);
 }
};

enableValidation(options);



class formValidator {}
