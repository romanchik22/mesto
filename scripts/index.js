const profileEditButton = document.querySelector('.profile__edit');
const popupEditProfile = document.getElementById('popup-edit-profile');
const popupCloseProfileButton = popupEditProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = popupEditProfile.querySelector('.popup__input_context_name');
const inputJob = popupEditProfile.querySelector('.popup__input_context_job');
const formEditProfile = popupEditProfile.querySelector('.popup__form');



function showPopup(popup) {
    popup.classList.add('popup_opened');
}

const editProfile = () => {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    showPopup(popupEditProfile); 
}  

function hiddenPopup(popup) {
    popup.classList.remove('popup_opened');
}

const hiddenPopupProfile = () => {
    hiddenPopup(popupEditProfile);
};

function submitFormEditProfile(evt) {
    evt.preventDefault();
    hiddenPopup(popupEditProfile);
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

profileEditButton.addEventListener('click', editProfile);
popupCloseProfileButton.addEventListener('click', hiddenPopupProfile);
formEditProfile.addEventListener('submit', submitFormEditProfile);

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
    hiddenPopup(popupImage);
}

popupImageCloseButton.addEventListener('click', hiddenPopupimage);

const showImageFull = (event) => {
    const imageElement = event.target;
    const popupFullImage = popupImage.querySelector('.popup__image-full');

    showPopup(popupImage);
    popupFullImage.src = imageElement.src;
    popupFullImage.alt = imageElement.alt;
    popupImage.querySelector('.popup__image-subtitle').textContent = imageElement.alt;
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
    placeElement.querySelector(".place__image").addEventListener('click', showImageFull);

    return placeElement; 
}

function renderCard({ name, link }) {
    const newPlaceElement = createCard({ name, link }); 
    placesContainer.prepend(newPlaceElement);
}




const cardPopup = document.getElementById('popup-add-card');
const cardEditButton = document.querySelector('.profile__add-place');
const cardPopupClose = cardPopup.querySelector('.popup__close');
const cardInputPlace = document.querySelector('.popup__input_context_place');
const cardInputLink = document.querySelector('.popup__input_context_link');
const cardFormElement = cardPopup.querySelector('.popup__form');

function showPopupAddCard() {
    cardInputPlace.value = '';
    cardInputLink.value = '';
    showPopup(cardPopup); 
}

function submitHandlerCardForm(evt) {
    evt.preventDefault();
    hiddenPopup(cardPopup);

    const newPlace = {
        name: cardInputPlace.value,
        link: cardInputLink.value
    }

    initialCards.unshift(newPlace);
    renderCard(newPlace);
}

const hiddenPopupAddCard = () => {
    hiddenPopup(cardPopup);
};


cardEditButton.addEventListener('click', showPopupAddCard);
cardPopupClose.addEventListener('click', hiddenPopupAddCard);
cardFormElement.addEventListener('submit', submitHandlerCardForm);  

render();




