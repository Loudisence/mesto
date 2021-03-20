const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit');
const closePopupBtn = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field-name');
let descriptionInput = document.querySelector('.popup__field-description');
/* const likeButtons = document.querySelectorAll('.element__items-like');

function likeActive(event) {
 const element = event.target;
 element.classList.toggle('element__items-like_active');
}

likeButtons.forEach(item => {
  item.addEventListener('click', likeActive)
})*/

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
openPopupBtn.addEventListener('click', function (event) {openPopup(); });
closePopupBtn.addEventListener('click', function() {closePopup(); });
