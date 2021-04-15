import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import Api from "./components/Api.js";
import PopupDeleteCard from "./components/PopupDeleteCard.js";
import PopupWithAvatar from "./components/PopupWithAvatar.js";
import {
  myId,
  nameInput,
  jobInput,
  editProfileButton,
  editAvatar,
  addButton,
  options,
  profilePopupEl,
  cardAddPopupEl,
} from "./utils/constants.js";
import "./pages/index.css";
import { ModuleFilenameHelpers } from "webpack";

// создать экземпляр Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-22",
  headers: {
    authorization: "8096f474-afa5-4224-80da-83335499b6b6",
    "Content-Type": "application/json",
  },
});

// Состояние загрузки
const renderLoading = function (isLoading) {
  if (isLoading) {
    // this._buttonSubmit.classList.add('popup__button_submit_loading');
    this._buttonSubmit.textContent = `Сохранение...`;
  } else {
    // this._buttonSubmit.classList.remove('popup__button_submit_loading');
    this._buttonSubmit.textContent = this._buttonTextContent;
  }
};

// экземпляр PopupWithForm для профиля
const profilePopup = new PopupWithForm(".popup_place_edit", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    profilePopup.renderLoading(true);
    api
      .editUserInfo(profilePopup._getInputValues())
      .then((data) => userInfo.setUserInfo(data))
      .catch((err) => console.log(err))
      .finally(() => profilePopup.renderLoading(false));
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
    api
      .addNewCard(cardAddPopup._getInputValues())
      .then((data) => {
        // const link = cardAddPopup._getInputValues().link;
        // const name = cardAddPopup._getInputValues().name;
        // const likes = [];
        const newCard = new Card(
          data,
          {
            selector: ".template",
            handleCardClick: () => {
              const popupWithImage = new PopupWithImage(
                ".popup_place_pic",
                data
              );
              popupWithImage.open();
            },
            handleCardDelete: ({ callback }) => {
              const deletePopup = new PopupDeleteCard(".popup_place_delete", {
                handleFormSubmit: (evt) => {
                  evt.preventDefault();
                  api.deleteCard(data._id).then(() => callback());

                  deletePopup.close();
                },
              });
              deletePopup.open();
            },
          },
          myId,
          api
        );
        const cardElement = newCard.generateCard();
        elementsList.addItem(cardElement);

        cardAddPopup.close();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
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
    items: api
      .getInitialCards()
      .then((res) => res.json)
      .catch((err) => console.log(`Ошибка: ${err}`)),
    renderer: (item) =>
      new Card(
        item,
        {
          selector: ".template",
          handleCardClick: () => {
            const popupWithImage = new PopupWithImage(".popup_place_pic", item);
            popupWithImage.open();
          },
          handleCardDelete: ({ callback }) => {
            const deletePopup = new PopupDeleteCard(".popup_place_delete", {
              handleFormSubmit: (evt) => {
                evt.preventDefault();
                api.deleteCard(item._id).then(() => callback());

                deletePopup.close();
              },
            });
            deletePopup.open();
          },
        },
        myId,
        api
      ).generateCard(),
  },
  ".elements"
);

elementsList.renderItems(api.getInitialCards());

// создать экземпляр UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
  avatarSelector: ".profile__avatar-container",
});

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => console.log(`Ошибка ${err}`));

// Создать экземпляр попапа смены аватарки
const avatarPopup = new PopupWithAvatar(".popup_place_avatar", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    api
      .editAvatar(avatarPopup._getInputValues())
      .then((data) => userInfo.setNewAvatar(data.avatar))
      .catch((err) => console.log(err));
    avatarPopup.close();
  },
  inputValues: () => {},
  validator: () => {
    avatarPopup.clearValidationErrors();
    avatarPopup.toggleButtonState();
  },
});

// Слушатели

editProfileButton.addEventListener("click", () => {
  profilePopup.open();
});
addButton.addEventListener("click", () => {
  cardAddPopup.open();
});
editAvatar.addEventListener("click", () => {
  avatarPopup.open();
});

// // Запуск валидации
const profileValidator = new FormValidator(options, profilePopupEl);
profileValidator.enableValidation();
const addCardValidator = new FormValidator(options, cardAddPopupEl);
addCardValidator.enableValidation();

// fetch(`https://mesto.nomoreparties.co/v1/cohort-22/users/me`, {
//   headers: {
//     authorization: "8096f474-afa5-4224-80da-83335499b6b6"
// }})
