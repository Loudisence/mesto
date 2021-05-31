import Popup from './Popup.js';
export default class PopupConfirm extends Popup {
  constructor({ popup, handleDeleteButtonClick }) {
    super(popup);
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._deleteCardButton = this._popup.querySelector('.popup__button');
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteCardButton.addEventListener('click', this._confirmDelete);
  }

  _confirmDelete = () => {
    this._handleDeleteButtonClick();
  }

}
