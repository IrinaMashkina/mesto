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

let myInfo;

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
      .then(() => {
        userInfo.setUserInfo(profilePopup._getInputValues());
        nameInput.value = "";
        jobInput.value = "";
      })
      .catch((err) => console.log(err))
      .finally(() => {
        profilePopup.renderLoading(false);
        profilePopup.close();
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

// экземпляр попапа удаления карточки
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

// экземпляр Section
const cardList = new Section(
  {
    renderer: (item) => renderCard(item),
  },
  ".elements"
);

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

    myInfo,
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
        cardList.addItem(renderCard(item));
        console.log(item);
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

// экземпляр UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
  avatarSelector: ".profile__avatar-container",
});

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

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    myInfo = userData;
    userInfo.setUserInfo(myInfo);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });
