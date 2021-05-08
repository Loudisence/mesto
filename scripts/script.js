import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './initialCards.js';

const profilePopup = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit');
const profileCloseButton = profilePopup.querySelector('.popup__button-close');
const nameInput = profilePopup.querySelector('.popup__field_type_name');
const descriptionInput = profilePopup.querySelector('.popup__field_type_description')

const cardsPopup = document.querySelector('.popup_type_cards');
const cardsPopupForm = cardsPopup.querySelector('.popup__form-cards');
const cardsAddButton = document.querySelector('.profile__add');
const cardsCloseButton = cardsPopup.querySelector('.popup__button-close');

const imagesList = document.querySelector('.elements');
// const imagesTemplate = document.querySelector('#image-template').content.querySelector('.element');
const titleInput = cardsPopup.querySelector('.popup__field_type_title');
const imageInput = cardsPopup.querySelector('.popup__field_type_link');
const imagePopup = document.querySelector('.popup_type_image');
const imageTitle = imagePopup.querySelector('.popup__title-card');
const imageCard = imagePopup.querySelector('.popup__image');
const imageCloseButton = imagePopup.querySelector('.popup__button-close');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const overlayPopupProfile = document.querySelector('.popup__overlay_profile');
const overlayPopupCard = document.querySelector('.popup__overlay_card');
const overlayPopupImage = document.querySelector('.popup__overlay_image');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__error_visible',
  templateClass: '.image-template',
};

function openPopup(elem) {
  const editFormValidator = new FormValidator (config, document.querySelector('.popup__form-profile'));
  editFormValidator.enableValidation();
  const addFormValidator = new FormValidator (config, document.querySelector('.popup__form-cards'));
  addFormValidator.enableValidation();
  elem.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup);
  }
}

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(profilePopup);
}

function profileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(profilePopup);
}

function cardsSubmitHandler(evt) {
  evt.preventDefault();
  const cardTitleValue = titleInput.value;
  const cardImageValue = imageInput.value;
  addCard({
    name: cardTitleValue,
    link: cardImageValue
  });
  cardsPopupForm.reset();
  closePopup(cardsPopup);
}

function createCard(cardData) {
  const card = new Card(cardData, config.templateClass, revealPhoto);
  const cardsElement = card.generateCard();
  return cardsElement;
}

function revealPhoto({name, link}) {
  imageTitle.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  openPopup(imagePopup);
}

function addCard(elem) {
  imagesList.prepend(createCard(elem));
}

initialCards.forEach(cardData => {
  imagesList.append(createCard(cardData));
});

profileEditButton.addEventListener('click', () => openProfilePopup(profilePopup));
cardsAddButton.addEventListener('click', () => openPopup(cardsPopup));
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));
cardsCloseButton.addEventListener('click', () => closePopup(cardsPopup));
imageCloseButton.addEventListener('click', () => closePopup(imagePopup));

overlayPopupProfile.addEventListener("click", () => closePopup(profilePopup));
overlayPopupCard.addEventListener("click", () => closePopup(cardsPopup));
overlayPopupImage.addEventListener("click", () => closePopup(imagePopup));

profilePopup.addEventListener('submit', profileSubmitHandler);
cardsPopup.addEventListener('submit', cardsSubmitHandler);
