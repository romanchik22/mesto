const profileEditButton = document.querySelector('.profile__edit');
const popup = document.getElementById('popup-editProfile');
const popupCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_context_name');
const inputJob = document.querySelector('.popup__input_context_job');
const formEditProfile = document.querySelector('.popup__form');



function showPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.innerText;
    inputJob.value = profileJob.innerText;
}

function hiddenPopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    hiddenPopup();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', hiddenPopup);
formEditProfile.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const placesContainer = document.querySelector(".places");
const placeTemplate = document.querySelector(".place-templete").content;

function render() {
    initialCards.forEach(renderCard);
}

function changeFavorite(event) {
    event.target.classList.toggle('place__button-favorite_active');
}

const deleteCard = (event) => {
    const deleteButton = event.target;
    const listItem = deleteButton.closest('.place');
    listItem.remove();
}

const popupImage = document.querySelector('#popup-image');

const popupImageCloseButton = popupImage.querySelector('.popup__close');

function hiddenPopupimage() {
    popupImage.classList.remove('popup_opened');
}

popupImageCloseButton.addEventListener('click', hiddenPopupimage);

const showImageFull = (event) => {
    const imageElement = event.target;
    const popupFullImage = popupImage.querySelector('.popup__image-full');

    popupImage.classList.add('popup_opened');
    popupFullImage.src = imageElement.src;
    popupFullImage.alt = imageElement.alt;
    popupImage.querySelector('.popup__image-subtitle').textContent = imageElement.alt;
}

function renderCard({ name, link }) {
    const placeElement = placeTemplate
        .cloneNode(true);
    const placeImage = placeElement.querySelector(".place__image");

    placeElement.querySelector(".place__title").textContent = name;
    placeImage.src = link;
    placeImage.alt = name;

    placeElement.querySelector(".place__button-favorite").addEventListener('click', changeFavorite);
    placeElement.querySelector(".place__button-delete").addEventListener('click', deleteCard);
    placeElement.querySelector(".place__image").addEventListener('click', showImageFull);

    placesContainer.prepend(placeElement);
}



const cardPopup = document.getElementById('add-card');
const cardEditButton = document.querySelector('.profile__add-place');
const cardPopupClose = cardPopup.querySelector('.popup__close');
const cardInputPlace = document.querySelector('.popup__input_context_place');
const cardInputLink = document.querySelector('.popup__input_context_link');
const cardFormElement = cardPopup.querySelector('.popup__form');

function showPopupAddCard() {
    cardPopup.classList.add('popup_opened');
    cardInputPlace.value = '';
    cardInputLink.value = '';
}

function hiddenPopupAddCard() {
    cardPopup.classList.remove('popup_opened');
}

function submitHandlerCardForm(evt) {
    evt.preventDefault();
    hiddenPopupAddCard();

    const newPlace = {
        name: cardInputPlace.value,
        link: cardInputLink.value
    }

    initialCards.unshift(newPlace);
    renderCard(newPlace);
}

cardEditButton.addEventListener('click', showPopupAddCard);
cardPopupClose.addEventListener('click', hiddenPopupAddCard);
cardFormElement.addEventListener('submit', submitHandlerCardForm);  

render();
