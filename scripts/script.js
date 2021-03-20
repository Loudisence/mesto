const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit');
const closePopupBtn = document.querySelector('.popup__button-close');
const popupOverlay = document.querySelector('.popup__overlay');
const likeButtons = document.querySelectorAll('.element__items-like');

function likeActive(event) {
  const element = event.target;
  element.classList.toggle('element__items-like_active');
}

likeButtons.forEach(item => {
  item.addEventListener('click', likeActive)
})

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', function (event) {
  openPopup();
});

closePopupBtn.addEventListener('click', function() {closePopup(); });
popupOverlay.addEventListener('click', function() {closePopup(); });

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let descriptionInput = document.querySelector('.popup__description');

function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let descriptionInputValue = descriptionInput.value;
  let profileName = document.querySelector('.profile__name');
  let profileDescription = document.querySelector('.profile__description');

  profileName.textContent = nameInputValue;
  profileDescription.textContent = descriptionInputValue;

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
