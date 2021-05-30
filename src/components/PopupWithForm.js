import Popup from "./Popup.js";

export default class PopupWithForm extends Popup  {
  constructor({popupSelector, submitForm}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__field-input');
    this._submitForm = submitForm;
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _submit = (evt) => {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
    this.close();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', this._submit);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._submit);
  }

  close() {
    super.close();
    this._form.reset();
  }

}
