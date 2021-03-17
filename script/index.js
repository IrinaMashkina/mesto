import Card from './card.js';
import FormValidator from './formValidator.js';
import {options} from './formValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// контейнер для карточек
const elements = document.querySelector('.elements');

function createCard(item) {
  const card = new Card(item.link, item.name, '.template');
  return card.generateCard();
};


// Добавление на страницу карточек из массива initialCards
initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elements.append(cardElement); 
});

// initialCards.forEach((item) => { 
//   const card = new Card(item.link, item.name, '.template'); 
//   const cardElement = card.generateCard(); 
//   elements.append(cardElement); 
// }); 

// ПОПАП БОЛЬШОЙ КАРТИНКИ
export const popupPic = document.querySelector('.popup_place_pic');
const closePicButton = document.querySelector('.popup__close-button_place_pic');

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
const popupCardAdd = document.querySelector('.popup_place_card-add');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-button_place_card-add');
// Находим формы ввода данных карточки
const cardTitleInput = document.querySelector(".popup__input_type_title");
const cardLinkInput = document.querySelector(".popup__input_type_link");

// ПОПАП РЕДАКТИРОВАНИЯ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
const profilePopup = document.querySelector('.popup_place_edit');
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.popup__close-button_place_edit');
// Находим формы ввода имени и "о себе"
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
// Находим на главной странице секцию Профиль, где меняются "Имя" и "О себе"
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

export const popupImg = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__title_place_pic');

// Запуск валидации
const profileForm = new FormValidator(options, profilePopup)
profileForm.enableValidation();
const addCardForm = new FormValidator(options, popupCardAdd)
addCardForm.enableValidation();

// Закрытие по оверлэй
function closeOverlayPopup(evt) {
  const targetItem = evt.target;
  if (targetItem.classList.contains('popup')) {
    closePopup(targetItem);
    }
};

// Закрытие по esc
function closeEscPopup(evt) {
  const ESCAPE = 27;
  if(evt.keyCode == ESCAPE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// Открытие любого попапа
export const openPopup = function(popup) {
  popup.classList.add('popup_opened'); 
  popup.addEventListener('click', closeOverlayPopup);
  popup.addEventListener('keydown', closeEscPopup);
};

// Функция закрытия  попапа 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeOverlayPopup);
  popup.removeEventListener('keydown', closeEscPopup);
};

// Функция открытия попапа редактирования профиля
function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value=profileName.textContent;
  jobInput.value=profileJob.textContent;
  const inputList = Array.from(profilePopup.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    profileForm.hideInputError(inputElement);
  });
    profileForm.toggleButtonState(); 
};

// Функция "сохранить изменения" в профиле
function HandlerFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    nameInput.value = '';
    jobInput.value = ''; 
    closePopup(profilePopup);
};

// // Добавление карточек
function saveNewCard(evt) {
  evt.preventDefault();
  const newCard = new Card(cardLinkInput.value, cardTitleInput.value, '.template');
  const cardElement = newCard.generateCard();
  elements.prepend(cardElement);
  closePopup(popupCardAdd);
};

// Открытие попапа для добавления карточек
function openAddCardPopup() {
  openPopup(popupCardAdd);
  cardTitleInput.value = '';
  cardLinkInput.value = '';
  const inputList = Array.from(popupCardAdd.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    addCardForm.hideInputError(inputElement);
  })
  addCardForm.toggleButtonState(); 
};

// Слушатели
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openAddCardPopup);

closeEditButton.addEventListener('click', () => {
    closePopup(profilePopup)
});

closeAddButton.addEventListener('click', () => {
  closePopup(popupCardAdd)
});

profilePopup.addEventListener('submit', HandlerFormSubmit); 
popupCardAdd.addEventListener('submit', saveNewCard);

closePicButton.addEventListener('click', () => {
  closePopup(popupPic)
});


 