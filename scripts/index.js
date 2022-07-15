const profileEditButton = document.querySelector('.profile__edit');
const popupEditProfile = document.getElementById('popup-edit-profile');
const popupCloseProfileButton = popupEditProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = popupEditProfile.querySelector('.popup__input_context_name');
const inputJob = popupEditProfile.querySelector('.popup__input_context_job');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const popupImage = document.querySelector('#popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const placesContainer = document.querySelector(".places");
const placeTemplate = document.querySelector(".place-templete").content;
const cardPopup = document.getElementById('popup-add-card');
const buttonSubmitCardPopup = cardPopup.querySelector('.popup__save');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const cardEditButton = document.querySelector('.profile__add-place');
const cardPopupClose = cardPopup.querySelector('.popup__close');
const cardInputPlace = document.querySelector('.popup__input_context_place');
const cardInputLink = document.querySelector('.popup__input_context_link');
const cardFormElement = cardPopup.querySelector('.popup__form');
const popupFullImage = popupImage.querySelector('.popup__image-full');
const inactiveButtonClass = 'popup__save_disabled';
const submitButtonSelector = '.popup__save';
const ESC_CODE = 27; 


function handlerKeyboardEvent(event) {
    if (event.keyCode == ESC_CODE) {
        hiddenPopup(document.querySelector('.popup_opened'));
    }
}

const handleCheckTarget = (event) => {
    if (event.target.classList.contains('popup')) hiddenPopup(event.target);
}

function showPopup(popup) {
    popup.addEventListener('click', handleCheckTarget);
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handlerKeyboardEvent);
}

const editProfile = () => {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    showPopup(popupEditProfile);
}

function hiddenPopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', handleCheckTarget);
    document.removeEventListener('keydown', handlerKeyboardEvent);
}

function submitFormEditProfile(evt) {
    evt.preventDefault();
    hiddenPopup(formEditProfile);
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

function render() {
    initialCards.forEach(renderCard);
}

function changeFavorite(event) {
    event.target.classList.toggle('place__button-favorite_active');
}

const deleteCard = (event) => {
    event.target.closest('.place').remove();
}

const showImageFull = (event) => {
    const imageElement = event.target;

    popupFullImage.src = imageElement.src;
    popupFullImage.alt = imageElement.alt;
    popupImage.querySelector('.popup__image-subtitle').textContent = imageElement.alt;

    showPopup(popupImage);
}

const createCard = ({ name, link }) => {
    const placeElement = placeTemplate
        .cloneNode(true);
    const placeImage = placeElement.querySelector(".place__image");

    placeElement.querySelector(".place__title").textContent = name;
    placeImage.src = link;
    placeImage.alt = name;

    placeElement.querySelector(".place__button-favorite").addEventListener('click', changeFavorite);
    placeElement.querySelector(".place__button-delete").addEventListener('click', deleteCard);
    placeImage.addEventListener('click', showImageFull);

    return placeElement;
}

function renderCard(cardInfo) {
    const newPlaceElement = createCard(cardInfo);
    placesContainer.prepend(newPlaceElement);
}

function showPopupAddCard() {
    cardPopupForm.reset();
    submitButtonStatus(
        cardPopupForm,
        inactiveButtonClass,
        buttonSubmitCardPopup,
    );
    showPopup(cardPopup);
}

function submitHandlerCardForm(evt) {
    evt.preventDefault();
    hiddenPopup(cardPopup);

    const newPlace = {
        name: cardInputPlace.value,
        link: cardInputLink.value
    }

    renderCard(newPlace);
}

function handleSubmit(event) {
    event.preventDefault();
    hiddenPopup(event.target.closest('.popup'));
}

cardEditButton.addEventListener('click', showPopupAddCard);
cardPopupClose.addEventListener('click', () => hiddenPopup(cardPopup));
cardFormElement.addEventListener('submit', submitHandlerCardForm);
popupImageCloseButton.addEventListener('click', () => hiddenPopup(popupImage));
profileEditButton.addEventListener('click', editProfile);
popupCloseProfileButton.addEventListener('click', () => hiddenPopup(popupEditProfile));
formEditProfile.addEventListener('submit', submitFormEditProfile);

render();   