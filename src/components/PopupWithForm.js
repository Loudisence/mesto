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
  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', (ev) => {
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}