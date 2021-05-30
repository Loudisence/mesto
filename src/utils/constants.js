export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: 'popup__error_visible',
  templateClass: '.image-template',
};

export const popupProfile = document.querySelector('.popup_type_profile');
export const popupCards = document.querySelector('.popup_type_cards');
export const popupAvatar = document.querySelector('.popup_type_avatar');

export const nameInput = popupProfile.querySelector('.popup__field_type_name');
export const descriptionInput = popupProfile.querySelector('.popup__field_type_description');

export const popupFormCards = document.querySelector('.popup__form-cards') ;
export const popupFormProfile = document.querySelector('.popup__form-profile');
export const popupFormAvatar = document.querySelector('.popup__form-avatar')

export const cardsAddButton = document.querySelector('.profile__add');
export const profileEditButton = document.querySelector('.profile__edit');
export const updateAvatarButton = document.querySelector('.profile__avatar-edit');

export const popupConfirmDelete = document.querySelector('.popup_type_confirm');
export const elementsList = document.querySelector('.elements');

export const name = document.querySelector('.profile__name');
export const description = document.querySelector('.profile__description');
export const avatar = document.querySelector('.profile__avatar');
export const imagePopup = document.querySelector('.popup_type_image');
