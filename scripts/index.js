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




const formAddCard = document.querySelector('.popup__form_new');
const formProdileUser = document.querySelector('.popup__form_user');

formAddCard.addEventListener('submit', sendFormProfile); 
formAddCard.addEventListener('input', handlerInputForm); 


validateForm(formAddCard);

function sendFormProfile(event) {
    event.preventDefault(); 

    const formGet = event.target; 

    if (formGet.checkValidity()) {
        alert("форма валидна");
    } else {
        alert("форма не валидна");
    }   
}

function handlerInputForm(event) {
    const curentForm = event.currentTarget; //тот объект для ккоторого сделан прослушиватель ('input', HandlerInputForm)
     
    validateForm(curentForm);
    validateInputError(event.target); 
}


function validateForm(form) {

    const buttonActivity = form.querySelector('.popup__save'); 

    if (form.checkValidity()) {
        buttonActivity.removeAttribute('disabled', true);
        buttonActivity.classList.add('popup__save_valid');
        buttonActivity.classList.remove('popup__save_invalid');
    } else { 
        buttonActivity.setAttribute('disabled', true);
        buttonActivity.classList.remove('popup__save_valid');
        buttonActivity.classList.add('popup__save_invalid');
    }
}

function validateInputError(input) {
    addCustomErrorMessage(input);

    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);   
    if (input.validationMessage) {
        input.classList.add('popup__input_red'); 
    } else {
        input.classList.remove('popup__input_red'); 
    }

    errorElement.textContent = input.validationMessage; 
} 


function addCustomErrorMessage(input) {

    input.setCustomValidity('');
    
    if (input.validity.valueMissing) {
        input.setCustomValidity('Вы пропустили это поле'); 
    }

    if (input.validity.tooShort || input.validity.tooLong) {
        input.setCustomValidity('В поле должно быть от 2 до 30 символов'); 
    }

    if (input.validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity('Введите адрес сайта'); 
    }

    if (input.type === 'url') {
        input.setCustomValidity('Введите адрес сайта'); 
    }



}