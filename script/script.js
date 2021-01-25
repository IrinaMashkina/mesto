let formElement = document.querySelector('.popup');

let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');

let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__job");

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');

let nameInputValue = nameInput.value;
let jobInputValue = jobInput.value;


editButton.addEventListener('click', function() {
    formElement.classList.add('popup_opened');
    nameInput.value=profileName.textContent;
    jobInput.value=profileJob.textContent;
    });    
    

popupClose.addEventListener('click', function() {
    formElement.classList.remove('popup_opened');      
    });


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let nameInput = formElement.querySelector('.popup__name');
    let nameInputValue = nameInput.value;
    
    let jobInput = formElement.querySelector('.popup__job');
    let jobInputValue = jobInput.value;
    
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__profession');

    profileName.textContent = nameInputValue;
    profileJob.textContent = jobInputValue;
    
    formElement.classList.remove('popup_opened');

}

formElement.addEventListener('submit', formSubmitHandler); 