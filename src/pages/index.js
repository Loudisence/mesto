import './index.css';

import {Api} from "../components/Api";
import Card from "../components/Card";
import {FormValidator} from "../components/FormValidator";
import Section from "../components/Section";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import PopupConfirm from "../components/popupConfirm";
import UserInfo from "../components/UserInfo";

import {
  config,
  popupProfile,
  popupCards,
  popupAvatar,
  nameInput,
  descriptionInput,
  popupFormCards,
  popupFormProfile,
  popupFormAvatar,
  cardsAddButton,
  profileEditButton,
  updateAvatarButton,
  popupConfirmDelete,
  elementsList,
  name,
  description,
  avatar,
  imagePopup
} from "../utils/constants";

const api = new Api({
  urlAddress: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: 'a56e20f9-c6b2-4741-9ade-3d3ac131871e',
    'Content-Type': 'application/json',
  },
});

const generateCard = (data) => {
  const card = new Card({
    data,
    cardSelector: '#image-template',
    userId: userId,
    handlers: {
      handleCardClick: (title, link) => {
        popupWithImage.open(title, link)
      },
      handleLikeClick: (cardId, isLiked) => {
        return api.likeCard(cardId, isLiked)
      },
      handleDeleteClick: (cardObject) => {
        popupConfirm.cardObject = cardObject;
        popupConfirm.open()
      }
    }
  })
  const cardElement = card.generateCard();
  card.markUserLikes(cardElement);
  card.updateLikes(cardElement);
  return cardElement;
};

let cardsList;

api.getInitialCards()
  .then((data) => {
    cardsList = new Section({
      data,
      renderer: (item) => {
        const cardElement = generateCard(item);
        cardsList.addItem(cardElement);
      }
    }, elementsList);
    cardsList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  })

const popupWithFormCards = new PopupWithForm({
  popupSelector: popupCards,
  submitForm: (info) => {
    renderLoading(popupCards, true);
    api.postNewCard(info.title, info.link)
      .then((data) => {
        const cardElement = generateCard(data);
        cardsList.addItem(cardElement);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>
        renderLoading(popupCards, false))

  }
})

const popupWithFormProfile = new PopupWithForm({
  popupSelector: popupProfile,
  submitForm: (info) => {
    renderLoading(popupProfile, true);
    api.setUserInfo(info.name, info.description)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>
        renderLoading(popupProfile, false))
  }
})

const popupWithFormAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  submitForm: (info) => {
    renderLoading(popupAvatar, true);
    api.setAvatar(info.avatarUrl)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() =>
        renderLoading(popupAvatar, false))
  }
})

const popupWithImage = new PopupWithImage(imagePopup);

const popupConfirm = new PopupConfirm({
  popupSelector: popupConfirmDelete,
  handleDeleteButtonClick:  () => {
    const cardId = popupConfirm.cardObject._cardId;
    api.deleteCard(cardId)
      .then(() => {
        popupConfirm.cardObject.deleteCard();
        popupConfirm.close();
        popupConfirm.cardObject = '';
      })
      .catch(err => {
        console.log(err);
      })
  }
})

const addFormValidator = new FormValidator (config, popupFormCards);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator (config, popupFormProfile);
editFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(config, popupFormAvatar);
avatarFormValidator.enableValidation()



const userInfo = new UserInfo({name, description, avatar});

let userId;

api.getUserInfo()
  .then((data) => {
    userId = data._id;
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err);
  })

function renderLoading(popup, isLoading) {
  const submitButton = popup.querySelector('.popup__button');
  if(isLoading) {
    submitButton.textContent = 'Сохранение...'
  }
  else {
    submitButton.textContent = 'Сохранить'
  }
}

cardsAddButton.addEventListener('click', function() {
  addFormValidator.removeErrors();
  addFormValidator.disableButton();
  popupWithFormCards.open();
});

profileEditButton.addEventListener('click', function() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  descriptionInput.value = userData.description;
  editFormValidator.removeErrors();
  editFormValidator.enableButton();
  popupWithFormProfile.open();
})

updateAvatarButton.addEventListener('click', function() {
  popupWithFormAvatar.open();
})

