
import { CLOSE_KEY_CODE } from "../utils/constants.js";

export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._element = document.querySelector(this._selector);
    this._closeButton = this._element.querySelector(".popup__close-button");
    this._handleEscCloseEl = (evt) => this._handleEscClose(evt);
    this._handleOverlayCloseEl = (evt) => this._handleOverlayClose(evt);
  }
  open() {
    this._element.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    this._element.classList.remove("popup_opened");
    this._element.removeEventListener("click", this._handleOverlayCloseEl);
    document.removeEventListener("keydown", this._handleEscCloseEl);
  }

  _handleEscClose(evt) {
    if (evt.keyCode == CLOSE_KEY_CODE) {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    const targetItem = evt.target;
    if (targetItem.classList.contains("popup")) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    this._element.addEventListener("click", this._handleOverlayCloseEl);
    document.addEventListener("keydown", this._handleEscCloseEl);
  }
}
