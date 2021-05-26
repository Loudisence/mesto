import './index.css';

import Card from "../components/Card";
import {FormValidator} from "../components/FormValidator";
import {initialCards} from "../utils/initialCards";
import Section from "../components/Section";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo";

const profilePopup = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit');
const nameInput = profilePopup.querySelector('.popup__field_type_name');
const descriptionInput = profilePopup.querySelector('.popup__field_type_description')

const popupCards = document.querySelector('.popup_type_cards');
const popupFormCards = document.querySelector('.popup__form-cards') ;
const popupFormProfile = document.querySelector('.popup__form-profile');
const cardsAddButton = document.querySelector('.profile__add');

const elementsList = document.querySelector('.elements')

const nameSelector = '.profile__name';
const descriptionSelector = '.profile__description';
const imagePopup = document.querySelector('.popup_type_image');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: 'popup__error_visible',
  templateClass: '.image-template',
};


const generateCard = (item, cardSelection, revealPhoto) => {
  const card = new Card(item, cardSelection, revealPhoto);
  return card.generateCard();
}


const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = generateCard(item, ".image-template", (name, link) => {
      popupWithImage.open(name, link);
    });
    cardList.addItem(cardElement);
  }
}, elementsList);
cardList.renderItems();



const popupCardForm = new PopupWithForm(popupCards, (formInputs) => {
  const cardElement = generateCard({
    link: formInputs.link,
    name: formInputs.title
  }, ".image-template", (link, title) => {
    popupWithImage.open(link, title);
  });
  cardList.prependItem(cardElement);
})
popupCardForm.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();
const popupEditForm = new PopupWithForm(profilePopup, (formInputs) => {
  const newProfileValues = {
    name: formInputs.name,
    description: formInputs.description
  }
  userInfo.setUserInfo(newProfileValues);
});
popupEditForm.setEventListeners();

const addFormValidator = new FormValidator (config, popupFormCards);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator (config, popupFormProfile);
editFormValidator.enableValidation();

const userInfo = new UserInfo({nameSelector, descriptionSelector});

profileEditButton.addEventListener("click", (evt) => {
  evt.stopPropagation();
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  descriptionInput.value = profileInfo.description;
  popupEditForm.open();
});

cardsAddButton.addEventListener("click", (evt) => {
  popupFormCards.reset();
  evt.stopPropagation()
  //addFormValidator.resetValidation();
  popupCardForm.open();
});

