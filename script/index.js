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

initialCards.forEach((item) => {
  const card = new Card(item.link, item.name, '.template');
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});

const popupPic = document.querySelector('.popup_place_pic');
// ПОПАП ДОБАВЛЕНИЯ КАРТОЧЕК
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

// Находим на главной странице секцию Профиль, где меняются "Имя" и "О себе"
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

// Закрытие по оверлэй
function onOverlayClose(evt) {
  const targetItem = evt.target;
  if (targetItem.classList.contains('popup')) {
    closePopup(targetItem);
    }
};

// Закрытие по esc
function onEscClose(evt) {
  const ESCAPE = 27;
  if(evt.keyCode == ESCAPE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// Открытие любого попапа
function openPopup(popup) {
  popup.classList.add('popup_opened'); 
  document.addEventListener('click', onOverlayClose);
  document.addEventListener('keydown', onEscClose);
};



// Открытие попапа форм
function openForm(popup) {
  openPopup(popup);
  hideErrors(popup);
};

// Функция закрытия  попапа 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', onOverlayClose);
  document.removeEventListener('keydown', onEscClose);
};

// Функция очистки ошибок валидации
function hideErrors (popup) {
  const errorList = popup.querySelectorAll('.popup__input-error');
  const inputList = popup.querySelectorAll('.popup__input');
  errorList.forEach((errorElement) => {
     errorElement.textContent = '';
    });
  inputList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });
}

// Функция открытия попапа редактирования профиля
function openProfilePopup() {
  const nameInput = document.querySelector(".popup__input_type_name");
  const jobInput = document.querySelector(".popup__input_type_job");
  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__profession');
    openForm(profilePopup);
    nameInput.value=profileName.textContent;
    jobInput.value=profileJob.textContent;
    
};

// Функция "сохранить изменения"
function formSubmitHandler(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    nameInput.value = '';
    jobInput.value = ''; 
    closePopup(profilePopup);
};

// Добавление карточек
function saveNewCard(evt) {
  evt.preventDefault();
  const inputText = cardTitleInput.value;
  const inputLink = cardLinkInput.value;
  const newCardAdd = getCard({name: inputText, link: inputLink});
  elements.prepend(newCardAdd);
  closePopup(popupCardAdd);
}

// Открытие попапа для добавления карточек
function openAddCardPopup() {
  openForm(popupCardAdd);
  cardTitleInput.value = '';
  cardLinkInput.value = ''; 
};



// ПОПАП УВЕЛИЧЕНИЯ ФОТО
const closePicButton = document.querySelector('.popup__close-button_place_pic');

const profileForm = new FormValidator(options, profilePopup)
profileForm.enableValidation();
const addCardForm = new FormValidator(options, popupCardAdd)
addCardForm.enableValidation();


editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openAddCardPopup);

closeEditButton.addEventListener('click', () => {
    closePopup(profilePopup)
});

closeAddButton.addEventListener('click', () => {
  closePopup(popupCardAdd)
});

profilePopup.addEventListener('submit', formSubmitHandler); 
popupCardAdd.addEventListener('submit', saveNewCard);

closePicButton.addEventListener('click', () => {
  closePopup(popupPic)
});


 