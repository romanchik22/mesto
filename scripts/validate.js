function submitButtonStatus(form, inactiveButtonClass, submitButtonSelector) {
    const buttonActivity = form.querySelector(submitButtonSelector);

    console.log(buttonActivity);
    if (form.checkValidity()) {
        buttonActivity.removeAttribute('disabled', true);
        buttonActivity.classList.remove(inactiveButtonClass);
    } else { 
        buttonActivity.setAttribute('disabled', true);
        buttonActivity.classList.add(inactiveButtonClass);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    hiddenPopup(event.target.closest('.popup')); 
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

function handlerInputForm(event, inactiveButtonClass, submitButtonSelector, inputErrorClass) {
    const curentForm = event.currentTarget; //тот объект для ккоторого сделан прослушиватель ('input', HandlerInputForm)
     
    submitButtonStatus(curentForm, inactiveButtonClass, submitButtonSelector);
    validateInputError(event.target, inputErrorClass);  
}

function enableValidation({
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
  }) {

    document.querySelectorAll(formSelector)
        .forEach(form => {
            form.addEventListener('submit', handleSubmit); 
            form.addEventListener('input', (event) => handlerInputForm(event, inactiveButtonClass, submitButtonSelector, inputErrorClass));
         
            submitButtonStatus(form, inactiveButtonClass, submitButtonSelector);
        })
  };

enableValidation({
    formSelector: '.popup__form',
    inputErrorClass: 'popup__input_red',
    inactiveButtonClass,
    submitButtonSelector
})