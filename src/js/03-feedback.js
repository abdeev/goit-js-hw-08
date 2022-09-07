import localstorageService from './localstorage';

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
    localstorageService.remove('feedback-form-state');
    inputMailEl.value = "";
    inputMessageEl.value = "";
    console.log(inputState);
}
formEl.addEventListener('input', onFieldInput);
formEl.addEventListener('submit', onBtnSubmit);