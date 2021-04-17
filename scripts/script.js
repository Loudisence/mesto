
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
const imagesTemplate = document.querySelector('#image-template').content.querySelector('.element');
const titleInput = cardsPopup.querySelector('.popup__field_type_title');
const imageInput = cardsPopup.querySelector('.popup__field_type_link');
const imagePopup = document.querySelector('.popup_type_image');
const imageTitle = imagePopup.querySelector('.popup__title-card');
const imageCard = imagePopup.querySelector('.popup__image');
const imageCloseButton = imagePopup.querySelector('.popup__button-close');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

const overlayPopupProfile = document.querySelector('.popup__overlay_profile');
const overlayPopupCard = document.querySelector('.popup__overlay_card');
const overlayPopupImage = document.querySelector('.popup__overlay_image');

function openPopup(elem) {
  elem.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
  const popup = document.querySelector('.popup_opened')
  if (evt.key === "Escape") {
    closePopup(popup);
  }
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
  cardsPopupForm.reset()
  closePopup(cardsPopup);
}
function createCard(cardData) {
  const cardElement = imagesTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const likeButton = cardElement.querySelector('.element__items-like');

  cardElement.querySelector('.element__items-name').textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

const deleteCard = cardElement.querySelector('.element__delete');
deleteCard.addEventListener('click', () => cardElement.remove());

  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__items-like_active');
  });

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


profileEditButton.addEventListener('click',() => openProfilePopup(profilePopup));
cardsAddButton.addEventListener('click',() => openPopup(cardsPopup));

profileCloseButton.addEventListener('click',() => closePopup(profilePopup));
cardsCloseButton.addEventListener('click',() => closePopup(cardsPopup));
imageCloseButton.addEventListener('click',() => closePopup(imagePopup));

overlayPopupProfile.addEventListener("click", () => closePopup(profilePopup));
overlayPopupCard.addEventListener("click", () => closePopup(cardsPopup));
overlayPopupImage.addEventListener("click", () => closePopup(imagePopup));

profilePopup.addEventListener('submit', profileSubmitHandler);
cardsPopup.addEventListener('submit', cardsSubmitHandler);
