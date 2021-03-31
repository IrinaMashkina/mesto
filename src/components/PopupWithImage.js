import Popup from "./Popup.js";
import { popupImg, popupTitle } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(selector, { link, name }) {
    super(selector);
    this._image = link;
    this._caption = name;
  }
  open() {
    super.open();
    popupImg.src = this._image;
    popupImg.alt = this._caption;
    popupTitle.textContent = this._caption;
  }
}
