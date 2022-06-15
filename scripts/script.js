
let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let profileEditing = document.querySelector('.profile-editing');
let profileEditingCloseButton = document.querySelector('.profile-editing__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let inputName = document.querySelector('.input_name');
let inputJob = document.querySelector('.input_job');
let formElement = document.querySelector('.profile-editing__form');

function showPopup() {
    popup.classList.remove('hidden');
    profileEditing.classList.remove('hidden');
    inputName.value = profileName.innerText;
    inputJob.value = profileJob.innerText; 
}

function hiddenPopup() {    
    popup.classList.add('hidden');
    profileEditing.classList.add('hidden');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    hiddenPopup();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value; 
}

profileEditButton.addEventListener('click', showPopup);
profileEditingCloseButton.addEventListener('click', hiddenPopup);
formElement.addEventListener('submit', formSubmitHandler);