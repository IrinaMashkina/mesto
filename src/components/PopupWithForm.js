import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, { handleFormSubmit, inputValues, validator }) {
    super(selector);
    this._formElement = this._element.querySelector(".popup__container");
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSubmit = this._formElement.querySelector(".popup__submit");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
    this._inputValues = inputValues;
    this._validator = validator;
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (inputElement) =>
        (this._formValues[inputElement.name] = inputElement.value)
    );
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit.addEventListener("click", this._handleFormSubmit);
  }

  close() {
    super.close();
    this._formElement.reset();
  }
  open() {
    super.open();
    this._validator();
    this._inputValues();
    this._getInputValues();
    this.setEventListeners();
  }
}
