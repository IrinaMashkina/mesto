export const initialCards = [
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

  export const ESCAPE_KEY_CODE = 27;
  // контейнер для карточек
export const elements = document.querySelector('.elements');

// ПОПАП БОЛЬШОЙ КАРТИНКИ
export const popupPic = document.querySelector('.popup_place_pic');
export const closePicButton = document.querySelector('.popup__close-button_place_pic');

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
export const popupCardAdd = document.querySelector('.popup_place_card-add');
export const addButton = document.querySelector('.profile__add-button');
export const closeAddButton = document.querySelector('.popup__close-button_place_card-add');
// Находим формы ввода данных карточки
export const cardTitleInput = document.querySelector(".popup__input_type_title");
export const cardLinkInput = document.querySelector(".popup__input_type_link");

// ПОПАП РЕДАКТИРОВАНИЯ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
export const profilePopup = document.querySelector('.popup_place_edit');
export const editButton = document.querySelector('.profile__edit-button');
export const closeEditButton = document.querySelector('.popup__close-button_place_edit');
// Находим формы ввода имени и "о себе"
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_job");
// Находим на главной странице секцию Профиль, где меняются "Имя" и "О себе"
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__profession');

export const popupImg = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__title_place_pic');
export const options = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};