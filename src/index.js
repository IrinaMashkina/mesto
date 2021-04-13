import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import Api from "./components/Api.js";
import {
  nameInput,
  jobInput,
  editButton,
  addButton,
  options,
  profilePopupEl,
  cardAddPopupEl,
} from "./utils/constants.js";
import './pages/index.css';



// создать экземпляр Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
  headers: {
    authorization: "8096f474-afa5-4224-80da-83335499b6b6",
    'Content-Type': 'application/json'
  }
}); 



// экземпляр PopupWithForm для профиля 
const profilePopup = new PopupWithForm(".popup_place_edit", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    // profilePopup.renderLoading(true);
    userInfo.setUserInfo(profilePopup._getInputValues());
    api.editUserInfo(profilePopup._getInputValues());
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
    items: api.getInitialCards().then(res => res.json),
    renderer: (item) =>
      new Card(item.link,item.name, api, {
        selector: ".template",
        handleCardClick: () => {
          const popupWithImage = new PopupWithImage(".popup_place_pic", item);
          popupWithImage.open();
        },
        handleCardDelete: () => {
          const deletePopup = new popupDeleteCard('popup_place_delete', api.deleteCard(cardItem.id), cardItem);
          deletePopup.open();
        }
      }).generateCard(),
  },
  ".elements"
);
elementsList.renderItems(api.getInitialCards());



// создать экземпляр UserInfo 
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
  avatarSelector: ".profile__avatar-container"
});

api.getUserInfo().then((data) => {
  userInfo.setUserInfo(data);
})
.catch((err) => console.log(`Ошибка ${err}`))

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
