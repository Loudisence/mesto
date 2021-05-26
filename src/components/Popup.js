export default class Popup {
  constructor(selector) {
    this._popup = selector;
    this._closeEsc = this._closeEsc.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._closeEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._closeEsc);
  }

  _closeEsc(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeOverlay(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      this._closeOverlay(evt);
    });
    const closeButton = this._popup.querySelector('.popup__button-close');
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}
