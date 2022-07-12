const formAddCard = document.querySelector('.popup__form_new');
const formUser = document.querySelector('.popup__form_user');

formAddCard.addEventListener('submit', sendFormProfile); 
formAddCard.addEventListener('input', handlerInputForm); 
formUser.addEventListener('submit', sendFormProfile); 
formUser.addEventListener('input', handlerInputForm); 

validateForm(formAddCard);
validateForm(formUser);

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
    console.log(`#${input.id}-error`); 
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);  

    if (input.validationMessage) {
        input.classList.add('popup__input_red'); 
    } else {
        input.classList.remove('popup__input_red'); 
    }

    errorElement.textContent = input.validationMessage; 
} 


function addCustomErrorMessage(input) {

    /* input.setCustomValidity('');
    
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
    } */

}