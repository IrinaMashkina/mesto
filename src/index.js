import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import {
  nameInput,
  jobInput,
  editButton,
  addButton,
  initialCards,
  options,
  profilePopupEl,
  cardAddPopupEl,
} from "./utils/constants.js";
import './pages/index.css';

// экземпляр PopupWithForm для профиля 
const profilePopup = new PopupWithForm(".popup_place_edit", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(profilePopup._getInputValues());
    nameInput.value = "";
    jobInput.value = "";
    profilePopup.close();
  },
  inputValues: () => {
    nameInput.value = userInfo.getUserInfo().name;
    jobInput.value = userInfo.getUserInfo().job;
  },
  validator: () => {
    profileValidator.clearValidationErrors();
    profileValidator.toggleButtonState();
  },
});

// экземпляр PopupWithForm для попапа добавления новых карточек
const cardAddPopup = new PopupWithForm(".popup_place_card-add", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const link = cardAddPopup._getInputValues().url;
    const name = cardAddPopup._getInputValues().caption;
    const newCard = new Card(link, name, {
      selector: ".template",
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(".popup_place_pic", {link,name});
        popupWithImage.open();
      },
    });
    const cardElement = newCard.generateCard();
    elementsList.addItem(cardElement);
    cardAddPopup.close();
  },
  inputValues: () => {},
  validator: () => {
    addCardValidator.clearValidationErrors();
    addCardValidator.toggleButtonState();
  },
});

// создать экземпляр Section
const elementsList = new Section(
  {
    items: initialCards,
    renderer: (item) =>
      new Card(item.link,item.name, {
        selector: ".template",
        handleCardClick: () => {
          const popupWithImage = new PopupWithImage(".popup_place_pic", item);
          popupWithImage.open();
        },
      }).generateCard(),
  },
  ".elements"
);

elementsList.renderItems();

// создать экземпляр UserInfo   ????
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
});

// Слушатели

editButton.addEventListener("click", () => {
  profilePopup.open();
});
addButton.addEventListener("click", () => {
  cardAddPopup.open();
});

// // Запуск валидации
const profileValidator = new FormValidator(options, profilePopupEl);
profileValidator.enableValidation();
const addCardValidator = new FormValidator(options, cardAddPopupEl);
addCardValidator.enableValidation();

// // Функция открытия попапа редактирования профиля
// function openProfilePopup() {
//   openPopup(profilePopup);
//   nameInput.value=userInfo.setUserInfo().name;
//   jobInput.value=userInfo.setUserInfo().job;
//   const inputList = Array.from(profilePopup.querySelectorAll('.popup__input'));
//   profileForm.clearValidationErrors();
//   profileForm.toggleButtonState();
// };

// function createCard(item) {
//   const card = new Card(item.link, item.name, '.template', handleCardClick);
//   return card.generateCard();
// };

// // Добавление на страницу карточек из массива initialCards
// initialCards.forEach((item) => {
//   const cardElement = createCard(item);
//   elements.append(cardElement);
// });
