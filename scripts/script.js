let profileEditButton = document.querySelector('.profile__edit');
let popup = document.getElementById('editProfile');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__input_context_name');
let inputJob = document.querySelector('.popup__input_context_job');
let formElement = document.querySelector('.popup__form');



function showPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.innerText;
    inputJob.value = profileJob.innerText;
}

function hiddenPopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    hiddenPopup();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

function changeFavorite (event) {
    event.target.classList.toggle('place__button-favorite_active');
}

profileEditButton.addEventListener('click', showPopup);
popupClose.addEventListener('click', hiddenPopup);
formElement.addEventListener('submit', formSubmitHandler);

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

function renderCard({ name, link }) {
  const placeElement = placeTemplate
    .cloneNode(true);
  placeElement.querySelector(".place__title").textContent = name;
  const placeImage = placeElement.querySelector(".place__image");
  placeImage.src = link;
  placeImage.alt = name;

  // беру кнопку и на неё вешаю прослушивателя
  placeElement.querySelector(".place__button-favorite").addEventListener('click', changeFavorite);
  
  placesContainer.prepend(placeElement);  
}

render();

let cardPopup = document.getElementById('add-card');
let cardEditButton = document.querySelector('.profile__add-place');

let cardPopupClose = cardPopup.querySelector('.popup__close');
let cardInputPlace = document.querySelector('.popup__input_context_place');
let cardInputLink = document.querySelector('.popup__input_context_link');
let cardFormElement = cardPopup.querySelector('.popup__form');

function cardShowPopup() {
    cardPopup.classList.add('popup_opened');
    cardInputPlace.value = '';
    cardInputLink.value = '';
}

function cardHiddenPopup() {
    cardPopup.classList.remove('popup_opened');
}

function cardFormSubmitHandler (evt) {
    evt.preventDefault();
    cardHiddenPopup();

    const newPlace = {
        name: cardInputPlace.value,
        link: cardInputLink.value
    }

    initialCards.unshift(newPlace); 
    renderCard(newPlace);
}



cardEditButton.addEventListener('click', cardShowPopup);
cardPopupClose.addEventListener('click', cardHiddenPopup);
cardFormElement.addEventListener('submit', cardFormSubmitHandler);
