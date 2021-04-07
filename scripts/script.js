
const profilePopup = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit');
const profileCloseButton = profilePopup.querySelector('.popup__button-close');
const nameInput = profilePopup.querySelector('.popup__field_type_name');
const descriptionInput = profilePopup.querySelector('.popup__field_type_description')
const images = document.querySelector('.images');

const cardsPopup = document.querySelector('.popup_type_cards');
const cardsPopupForm = cardsPopup.querySelector('.popup__form_cards');
const cardsAddButton = document.querySelector('.profile__add');
const imagesList = document.querySelector('.elements');
const imagesTemplate = document.querySelector('#image-template').content.querySelector('.element');
const titleInput = cardsPopup.querySelector('.popup__field_type_title');
const imageInput = cardsPopup.querySelector('.popup__field_type_link');
const cardsCloseButton = cardsPopup.querySelector('.popup__button-close');

const imagePopup = document.querySelector('.popup_type_image');
const imageTitle = imagePopup.querySelector('.popup__title-card');
const imageCard = imagePopup.querySelector('.popup__image');
const imageCloseButton = imagePopup.querySelector('.popup__button-close');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');


function openPopup(elem) {
  elem.classList.add('popup_opened');
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');
}

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(profilePopup);
}

function profileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(profilePopup);
}

function cardsSubmitHandler(evt) {
  evt.preventDefault();
  const cardTitleValue = titleInput.value;
  const cardImageValue = imageInput.value;
  addCard({ name: cardTitleValue,
    link: cardImageValue });
  cardsPopupForm.reset();
  closePopup(cardsPopup);
}
function createCard(cardData) {
  const cardElement = imagesTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');

  cardElement.querySelector('.element__items-name').textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

const deleteCard = cardElement.querySelector('.element__delete');
deleteCard.addEventListener('click', () => cardElement.remove());

function revealPhoto () {
  imageTitle.textContent = cardData.name;
  imageCard.src = cardData.link;
  imageCard.alt = cardData.name;
  openPopup(imagePopup);
}
cardImage.addEventListener('click', revealPhoto);

return cardElement;
}

function addCard (elem) {
  imagesList.prepend(createCard(elem));
}

initialCards.forEach(elem => {
  imagesList.append(createCard(elem));
});

const likeButton = document.querySelectorAll('.element__items-like');

function likeActive(event) {
  const element = event.target;
  element.classList.toggle('element__items-like_active');
}

likeButton.forEach(item => {
  item.addEventListener('click', likeActive);
});

profileEditButton.addEventListener('click',() => openProfilePopup(profilePopup));
cardsAddButton.addEventListener('click',() => openPopup(cardsPopup));

profileCloseButton.addEventListener('click',() => closePopup(profilePopup));
cardsCloseButton.addEventListener('click',() => closePopup(cardsPopup));
imageCloseButton.addEventListener('click',() => closePopup(imagePopup));

profilePopup.addEventListener('submit', profileSubmitHandler);
cardsPopup.addEventListener('submit', cardsSubmitHandler);
