function submitButtonStatus(form, inactiveButtonClass, submitButtonSelector) {
    const buttonActivity = form.querySelector(submitButtonSelector); 

    if (form.checkValidity()) {
        buttonActivity.removeAttribute('disabled', true);
        buttonActivity.classList.remove(inactiveButtonClass);
    } else { 
        buttonActivity.setAttribute('disabled', true);
        buttonActivity.classList.add(inactiveButtonClass);
    }
}

function sendForm(event) {
    event.preventDefault(); 

    const formGet = event.target; 

    if (formGet.checkValidity()) {
        alert("форма валидна");
    } else {
        alert("форма не валидна");
    }   
}

function validateInputError(input, inputErrorClass) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);  

    if (input.validationMessage) {
        input.classList.add(inputErrorClass); 
    } else {
        input.classList.remove(inputErrorClass); 
    }

    errorElement.textContent = input.validationMessage; 
}

function enableValidation({
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
  }) {

    function handlerInputForm(event) {
        const curentForm = event.currentTarget; //тот объект для ккоторого сделан прослушиватель ('input', HandlerInputForm)
         
        submitButtonStatus(curentForm, inactiveButtonClass, submitButtonSelector);
        validateInputError(event.target, inputErrorClass);  
    }
    
    const form = document.querySelector(formSelector);
    form.addEventListener('submit', sendForm); 
    form.addEventListener('input', handlerInputForm);
 
    submitButtonStatus(form, inactiveButtonClass, submitButtonSelector);  
  };

enableValidation({
    formSelector: '.popup__form_new',
    inputErrorClass: 'popup__input_red',
    inactiveButtonClass: 'popup__save_invalid',
    submitButtonSelector: '.popup__save'
})

enableValidation({
    formSelector: '.popup__form_user',
    inputErrorClass: 'popup__input_red',
    inactiveButtonClass: 'popup__save_invalid',
    submitButtonSelector: '.popup__save',
})