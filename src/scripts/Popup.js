export default class Popup {
  constructor(photoPopup) {
    this._popup = photoPopup;
    this._closePopupEsc = this._closePopupEsc.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._closePopupEsc);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._closePopupEsc);
  }

  _closePopupEsc(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  _closePopupOverlay(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      this._closePopupOverlay(evt);
    });
    const closeButton = this._popup.querySelector('.popup__button-close');
    closeButton.addEventListener('click', () => {
      this.closePopup();
    });
  }
}
