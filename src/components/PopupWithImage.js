import Popup from "./Popup.js";
export default class PopupWithImage extends Popup  {
  constructor(imagePopup) {
    super(imagePopup);
    this._imageCard = imagePopup.querySelector('.popup__image');
    this._imageTitle = imagePopup.querySelector('.popup__title-card');
  }

  open(name, link) {
    super.open();
    this._imageCard.alt = name;
    this._imageTitle.textContent = name;
    this._imageCard.src = link;
  }
}
