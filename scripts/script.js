let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('input[name="input-name"]');
let inputJob = document.querySelector('input[name="input-job"]');
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
    event.target.classList.toggle('place__button-favorite_black');
}

profileEditButton.addEventListener('click', showPopup);
popupClose.addEventListener('click', hiddenPopup);
formElement.addEventListener('submit', formSubmitHandler);
placeButtonFavorite.forEach(function (el) {
    el.addEventListener('click', changeFavorite);
}); 
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

const placesContainer = document.querySelector(".elements");
const placeTemplate = document.querySelector("#place-template").content;

const placeInfo = initialCards0(function (card) {
  return {
    name: card.name,
    link: card.link
  };
});

function render() {
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const placeElement = placeTemplate
    .querySelector(".grid-element")
    .cloneNode(true);
  placeElement.querySelector(".grid-element__title").textContent = name;
  placeElement.querySelector(".grid-element__image").src = link;

  placesContainer.prepend(placeElement);
}

render();


