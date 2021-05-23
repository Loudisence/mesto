export default class Card {
  constructor(data, cardSelector, revealPhoto) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._revealPhoto = revealPhoto;
    this._element = this._getTemplate();
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.alt = this._title;
    this._cardImage.src = this._link;
    this._cardName = this._element.querySelector('.element__items-name');
    this._cardName.textContent = this._title;
    this._setEventListeners();
    return this._element;
  }

  _deleteCard() {
    this._element.remove();
  }

  _likeCard(cardsLike) {
    cardsLike.classList.toggle('grid-item__like_active');
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._revealPhoto(this._title, this._link));
    const deleteCard = this._element.querySelector('.element__delete');
    deleteCard.addEventListener('click', () => this._deleteCard());
    const cardsLike = this._element.querySelector('.element__items-like');
    cardsLike.addEventListener('click', () => this._likeCard(cardsLike));
  };
};
