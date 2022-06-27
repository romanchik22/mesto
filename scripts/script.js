let profileEditButton = document.querySelector('.profile__edit');
let popup = document.getElementById('editProfile');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__input_context_name');
let inputJob = document.querySelector('.popup__input_context_job');
let formElement = document.querySelector('.popup__form');
let placeButtonFavorite = document.querySelectorAll('.place__button-favorite');


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

const placeButtonRender = () => {
    placeButtonFavorite.forEach(function (el) {
        el.addEventListener('click', changeFavorite);
    }); 
}  


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
    // .querySelector(".place")
    .cloneNode(true);
  placeElement.querySelector(".place__title").textContent = name;
  placeElement.querySelector(".place__image").src = link;
  placeElement.querySelector(".place__button-favorite").classList.toggle('place__button-favorite_black');
    
  placesContainer.prepend(placeElement);
}

render();
placeButtonRender(); 

let cardPopup = document.getElementById('add-card');
let cardEditButton = document.querySelector('.profile__add-place');

let cardPopupClose = cardPopup.querySelector('.popup__close');
//let inputName = document.querySelector('input[name="input-name"]');
//let inputJob = document.querySelector('input[name="input-job"]');
let cardFormElement = cardPopup.querySelector('.popup__form');

function cardShowPopup() {
    cardPopup.classList.add('popup_opened');
    //inputName.value = profileName.innerText;
    //inputJob.value = profileJob.innerText;
}

function cardHiddenPopup() {
    cardPopup.classList.remove('popup_opened');
}

function cardFormSubmitHandler (evt) {
    evt.preventDefault();
    cardHiddenPopup();
    //profileName.textContent = inputName.value;
    //profileJob.textContent = inputJob.value;
}


cardEditButton.addEventListener('click', cardShowPopup);
cardPopupClose.addEventListener('click', cardHiddenPopup);
cardFormElement.addEventListener('submit', cardFormSubmitHandler);
