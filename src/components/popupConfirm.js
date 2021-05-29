import Popup from './Popup.js';
export default class PopupConfirm extends Popup {
  constructor({ popupSelector, handleDeleteButtonClick }) {
    super(popupSelector);
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._deleteCardButton = this._popup.querySelector('.popup__button');
  }

  _setEventListeners() {
    super._setEventListeners();
    this._deleteCardButton.addEventListener('click', this._confirmDelete);
  }

  _confirmDelete = () => {
    this._handleDeleteButtonClick();
  }

  open() {
    this._setEventListeners();
    super.open();
  }

}
