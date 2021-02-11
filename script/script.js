// СОЗДАНИЕ КАРТОЧЕК ИЗ JS
// //Массив с карточками

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
// Находим template
const cardTemplate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');

// Создаём  карточки

function getCard(item) {
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);
    const image = newCard.querySelector('.card__image');
    const title = newCard.querySelector('.card__title');
    title.textContent = item.name;
    image.src = item.link;
    image.alt = item.name;
    const deleteButton = newCard.querySelector('.card__delete');
    deleteButton.addEventListener('click', handleDelete);
    const likeButton = newCard.querySelector('.card__like');
    likeButton.addEventListener('click', likeActive);
    const imageBig = newCard.querySelector('.card__image');
    imageBig.addEventListener('click', () => {
      clickImage(item)
    });

    return newCard;  
}


// Добавляем карточки в секцию elements
function renderCard() {
    const html = initialCards.map(getCard);
    elements.append(...html);
}
renderCard();


// Функция открытия любого попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Находим попапы
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



// Функция открытия попапа редактирования профиля
function openProfilePopup() {
    openPopup(profilePopup);
    nameInput.value=profileName.textContent;
    jobInput.value=profileJob.textContent;
};

// Функция "сохранить изменения"
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    nameInput.value = '';
    jobInput.value = ''; 
    closePopup(profilePopup);
};



// ПОПАП ДОБАВЛЕНИЯ КАРТОЧЕК
const popupCardAdd = document.querySelector('.popup_place_card-add');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-button_place_card-add');
// Находим формы ввода данных карточки
const cardTitleInput = document.querySelector(".popup__input_type_title");
const cardLinkInput = document.querySelector(".popup__input_type_link");


// Добавление карточек
function saveNewCard (evt) {
  evt.preventDefault();
  const inputText = cardTitleInput.value;
  const inputLink = cardLinkInput.value;
  const newCardAdd = getCard({name: inputText, link: inputLink});
  elements.prepend(newCardAdd);
  cardTitleInput.value = '';
  cardLinkInput.value = '';
  closePopup(popupCardAdd);
};

// Удаление карточки
function handleDelete(event) {
  const eventTarget = event.target;
  const targetItem = eventTarget.closest('.card');
  targetItem.remove();
}

//Функция Лайк
function likeActive(evt) {
    const eventTarget = evt.target;
    const targetLike = eventTarget.closest('.card__like');
    targetLike.classList.toggle('card__like_active');
};



// ПОПАП УВЕЛИЧЕНИЯ ФОТО
const popupImg = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title_place_pic');
const popupPic = document.querySelector('.popup_place_pic');
const closePicButton = document.querySelector('.popup__close-button_place_pic');

function clickImage(item) {
  openPopup(popupPic);
  popupImg.setAttribute('src', item.link);
  popupImg.setAttribute('alt', item.name);
  popupTitle.textContent = item.name;
}



editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', () => {
  openPopup(popupCardAdd)
});
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


