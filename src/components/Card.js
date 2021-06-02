export default class Card {
  constructor({data, cardSelector, userId, handlers}) {
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handlers.handleCardClick;
    this._handleLikeClick = handlers.handleLikeClick;
    this._handleDeleteClick = handlers.handleDeleteClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardName = this._element.querySelector('.element__items-name');
    this._delete = this._element.querySelector('.element__delete');
    this._like = this._element.querySelector('.element__likes-like');
    this._counter = this._element.querySelector('.element__likes-counter');
    this._cardName.textContent = this._title;
    this._cardImage.alt = this._title;
    this._cardImage.src = this._link;
    this._mayDelete();
    this._setEventListeners();
    return this._element;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  deleteCard() {
    this._element.remove();
  }

  _mayDelete() {
    if (this._userId !== this._ownerId) {
      this._delete.classList.add('element__delete_hidden')
    }
    else {
      this._delete.classList.remove('element__delete_hidden')
    }
  }

  _toggleLike() {
    this._handleLikeClick(this._cardId, this.isLiked)
      .then((data) => {
        this._like.classList.toggle('element__likes-like_active');
        this.isLiked = !this.isLiked;
        this._counter.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  markUserLikes() {
    console.log([this._likes, this._userId]);
    if (this._likes.some(person => person._id === this._userId)) {
      this._like.classList.add('element__likes-like_active');
    }
  }

  updateLikes() {
    this._counter.textContent = this._likes.length;
  }


  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._toggleLike();
    });

    this._delete.addEventListener('click', () => {
      this._handleDeleteClick(this);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });
  }
};
