export class Card {
  constructor(data, cardSelector, revealPhoto) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._revealPhoto = revealPhoto;
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.element__image');
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector('.element__items-name').textContent = this._name;
    this._setEventListeners();

    return this._element;
  }

  _deleteCard() {
    this._element.remove();
    this._element = 0;
  }

  _likeCard(cardsLike) {
    cardsLike.classList.toggle('element__items-like_active');
  }

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => this._revealPhoto({name: this._name, link: this._link}));
    const deleteCard = this._element.querySelector('.element__delete');
    deleteCard.addEventListener('click', () => this._deleteCard());
    const cardsLike = this._element.querySelector('.element__items-like');
    cardsLike.addEventListener('click', () => this._likeCard(cardsLike));
  };
}
