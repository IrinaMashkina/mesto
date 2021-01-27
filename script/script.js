// Находим попап
let formElement = document.querySelector('.popup');

// Находим кнопки открытия и закрытия попапа
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

// Находим формы ввода имени и "о себе"
let nameInput = formElement.querySelector(".popup__input_type_name");
let jobInput = formElement.querySelector(".popup__input_type_job");

// Находим на главной странице секцию Профиль, где меняются "Имя" и "О себе"
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');

// Функция открытия попапа
function openPopup() {
    formElement.classList.add('popup_opened');
    nameInput.value=profileName.textContent;
    jobInput.value=profileJob.textContent;
    };

// Функция закрытия попапа    
function closePopup() {
    formElement.classList.remove('popup_opened');   
};

// Функция "сохранить изменения"
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    formElement.classList.remove('popup_opened');
};


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 