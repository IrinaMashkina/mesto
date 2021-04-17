
export const CLOSE_KEY_CODE = 27;

// попап добавления новых карточек
export const cardAddPopupEl = document.querySelector('.popup_place_card-add');
// кнопка открытия попапа добавления новых карточек
export const addButton = document.querySelector('.profile__add-button');

// попап редактирования информации о пользователе
export const profilePopupEl = document.querySelector('.popup_place_edit');

// попап смены аватарки
export const avatarPopupEl = document.querySelector('.popup_place_avatar');
// кнопка открытия попапа редактирования информации о пользователе
export const editProfileButton = document.querySelector('.profile__edit-button');
export const editAvatar = document.querySelector('.profile__avatar-container');
// формы ввода имени и "о себе"
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_job");

// попап большой картинки
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
