export default class Popup {
  constructor(selector) {
    this._popup = selector;
    this._closeBtn = this._popup.querySelector('.popup__button-close');
    this._closeEsc = this._closeEsc.bind(this);
    this._closeOvrl = this._closeOvrl.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  _closeEsc(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeOvrl(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
      this.close();
    }
  }

  _setEventListeners() {
    document.addEventListener('keydown', this._closeEsc);
    this._popup.addEventListener('mousedown', this._closeOvrl);
    this._closeBtn.addEventListener('click', () => this.close());
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._closeEsc);
    this._popup.removeEventListener('mousedown', this._closeOvrl);
    this._closeBtn.removeEventListener('click', () => this.close());
  }
}
