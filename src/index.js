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
  avatarPopupEl,
} from "./utils/constants.js";

import "./pages/index.css";

// Запуск валидации
const profileValidator = new FormValidator(options, profilePopupEl);
profileValidator.enableValidation();
const addCardValidator = new FormValidator(options, cardAddPopupEl);
addCardValidator.enableValidation();
const avatarValidator = new FormValidator(options, avatarPopupEl);
avatarValidator.enableValidation();

// создать экземпляр Api
const api = new Api({
  baseUrl: "https:/mesto.nomoreparties.co/v1/cohort-22",
  headers: {
    authorization: "8096f474-afa5-4224-80da-83335499b6b6",
    "Content-Type": "application/json",
  },
});

// экземпляр PopupWithForm для профиля
const profilePopup = new PopupWithForm(".popup_place_edit", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    profilePopup.renderLoading(true);
    api
      .editUserInfo(profilePopup._getInputValues())
      .then(userInfo.setUserInfo(profilePopup._getInputValues()))
      .catch((err) => console.log(err))
      .finally(() => {
        profilePopup.renderLoading(false);
        profilePopup.close();
        nameInput.value = "";
        jobInput.value = "";
      });
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

const deletePopup = new PopupDeleteCard(".popup_place_delete", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    api
      .deleteCard(deletePopup._id)
      .then(() => deletePopup.card.remove())

      .catch((err) => console.log(err))
      .finally(() => {
        deletePopup.close();
      });
  },
});

// создание карточки
function renderCard(item) {
  const newCard = new Card(
    item,
    {
      selector: ".template",
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(".popup_place_pic", item);
        popupWithImage.open();
      },
      handleCardDelete: (id, card) => deletePopup.open(id, card),
    },

    myId,
    api
  ).generateCard();
  return newCard;
}
// экземпляр PopupWithForm для попапа добавления новых карточек
const cardAddPopup = new PopupWithForm(".popup_place_card-add", {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    cardAddPopup.renderLoading(true);
    api
      .addNewCard(cardAddPopup._getInputValues())
      .then((item) => {
        const card = renderCard(item);
        elementsList.addItem(card);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        cardAddPopup.renderLoading(false);
        cardAddPopup.close();
      });
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
    renderer: (item) => renderCard(item),
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
    avatarPopup.renderLoading(true);
    api
      .editAvatar(avatarPopup._getInputValues())
      .then((data) => userInfo.setNewAvatar(data.avatar))
      .catch((err) => console.log(err))
      .finally(() => {
        avatarPopup.renderLoading(false);
        avatarPopup.close();
      });
  },
  inputValues: () => {},
  validator: () => {
    avatarValidator.clearValidationErrors();
    avatarValidator.toggleButtonState();
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
