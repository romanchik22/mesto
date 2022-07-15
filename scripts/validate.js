function submitButtonStatus(form, inactiveButtonClass, buttonActivity) {

    if (form.checkValidity()) {
        buttonActivity.removeAttribute('disabled');
        buttonActivity.classList.remove(inactiveButtonClass);
    } else {
        buttonActivity.setAttribute('disabled', true);
        buttonActivity.classList.add(inactiveButtonClass);
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

function handlerInputForm(event, inactiveButtonClass, buttonActivity, inputErrorClass) {
    
    const currentForm = event.currentTarget; //тот объект для ккоторого сделан прослушиватель ('input', HandlerInputForm)

    submitButtonStatus(currentForm, inactiveButtonClass, buttonActivity);
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
    for (let form of document.forms) {
        const buttonActivity = form.querySelector(submitButtonSelector);

        form.addEventListener('submit', handleSubmit);
        form.querySelectorAll('.popup__input')
            .forEach(item => item.addEventListener('input', 
                (event) => handlerInputForm(event, inactiveButtonClass, buttonActivity, inputErrorClass))
            );
        
        submitButtonStatus(form, inactiveButtonClass, buttonActivity);
    };
};

enableValidation({
    formSelector: '.popup__form',
    inputErrorClass: 'popup__input_red',
    inactiveButtonClass,
    submitButtonSelector
})