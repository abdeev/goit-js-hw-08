import localstorageService from './localstorage';
const throttle = require('lodash.throttle')

const formEl = document.querySelector('.feedback-form')
const inputMailEl = document.querySelector('[name="email"]');
const inputMessageEl = document.querySelector('[name="message"]');

const inputState = {};


const fillInputFields = () => {
  const inputFieldsLS = localstorageService.load('feedback-form-state');
  
    if (!inputFieldsLS) { return }
    
  for (const prop in inputFieldsLS) {
    if (inputFieldsLS.hasOwnProperty(prop)) {
        formEl.elements[prop].value = inputFieldsLS[prop];
        inputState[prop] = inputFieldsLS[prop];
    }
  }
};

fillInputFields();

function onFieldInput(event) {
    const { target } = event;

    const fieldName = target.name;
    const fieldMessage = target.value;
    inputState[fieldName] = fieldMessage;
    localstorageService.save('feedback-form-state', inputState);
};
function onBtnSubmit(event) {
    event.preventDefault();
    console.log(localstorageService.load('feedback-form-state'));
    formEl.reset();
    localstorageService.remove('feedback-form-state');
    
}
formEl.addEventListener('input', throttle(onFieldInput, 300));
formEl.addEventListener('submit', onBtnSubmit);