import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(selector, {handleFormSubmit}) {
        super(selector);
        this._element = document.querySelector(this._selector);
        this.handleFormSubmit = handleFormSubmit;
        
    }
    setEventListeners() {
        super.setEventListeners();
        this._element.querySelector('.popup__submit_place_delete').addEventListener('click', this.handleFormSubmit);
    }
    open() {
        super.open();
        this.setEventListeners();
    }

    close() {
        super.close();
    }
}