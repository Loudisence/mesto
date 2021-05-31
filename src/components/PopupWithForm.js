import Popup from "./Popup.js";

export default class PopupWithForm extends Popup  {
  constructor({ popup, submitForm }) {
    super(popup);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__field-input');
    this.setEventListeners();
  }

  _getInputValues = () => {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  _submit = (evt) => {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit);
  }

  close() {
    super.close();
    this._form.reset();
  }

}
