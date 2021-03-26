import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';


// function createCard(item) {
//   const card = new Card(item.link, item.name, '.template', handleCardClick);
//   return card.generateCard();
// };

// // Добавление на страницу карточек из массива initialCards
// initialCards.forEach((item) => {
//   const cardElement = createCard(item);
//   elements.append(cardElement); 
// });
const elementsList = new Section(({ 
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(
      item.link, 
      item.name, 
      '.template', 
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage('.popup_place_pic');
        PopupWithImage.open();
      });
    return card.generateCard();
  }
}, 
'.elements'));
elementsList.renderItems();
// Запуск валидации
const profileForm = new FormValidator(options, profilePopup)
profileForm.enableValidation();
const addCardForm = new FormValidator(options, popupCardAdd)
addCardForm.enableValidation();

// // Закрытие по оверлэй
// function handleOverlayClose(evt) {
//   const targetItem = evt.target;
//   if (targetItem.classList.contains('popup')) {
//     closePopup(targetItem);
//     }
// };

// Закрытие по esc
// function closeEscPopup(evt) {
  
//   if(evt.keyCode == ESCAPE_KEY_CODE) {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };

// Открытие любого попапа
// export const openPopup = function(popup) {
//   popup.classList.add('popup_opened'); 
//   popup.addEventListener('click', closeOverlayPopup);
//   document.addEventListener('keydown', closeEscPopup);
// };

// Функция закрытия  попапа 
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   popup.removeEventListener('click', closeOverlayPopup);
//   document.removeEventListener('keydown', closeEscPopup);
// };

// Функция открытия попапа редактирования профиля
function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value=profileName.textContent;
  jobInput.value=profileJob.textContent;
  const inputList = Array.from(profilePopup.querySelectorAll('.popup__input'));
  profileForm.clearValidationErrors();
  profileForm.toggleButtonState(); 
};

// Функция "сохранить изменения" в профиле
function handlerFormSubmit(evt) {
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
  addCardForm.clearValidationErrors();
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

profilePopup.addEventListener('submit', handlerFormSubmit); 
popupCardAdd.addEventListener('submit', saveNewCard);

closePicButton.addEventListener('click', () => {
  closePopup(popupPic)
});


 