let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
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
placeButtonFavorite.forEach(function (el) {
    el.addEventListener('click', changeFavorite);
});
