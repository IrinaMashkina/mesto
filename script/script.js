// Находим попапы
let formElement = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup__edit');
let popupCardAdd = document.querySelector('.popup__card-add');

// Находим кнопки открытия и закрытия попапа
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeEditButton = document.querySelector('.popup__edit-close');
let closeAddButton = document.querySelector('.popup__add-close');






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
    return newCard;
}
// Добавляем карточки в секцию elements
function renderCard() {
    const html = initialCards.map(getCard);
    elements.append(...html);
}
renderCard();




// ПОПАП РЕДАКТИРОВАНИЯ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ

// Находим формы ввода имени и "о себе"
let nameInput = formElement.querySelector(".popup__input_type_name");
let jobInput = formElement.querySelector(".popup__input_type_job");
// Находим на главной странице секцию Профиль, где меняются "Имя" и "О себе"
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');
// Функция открытия попапа редактирования профиля
function openEditPopup() {
    popupEdit.classList.add('popup_opened');
    nameInput.value=profileName.textContent;
    jobInput.value=profileJob.textContent;
};
// Функция закрытия попапа   редактирования профиля 
function closeEditPopup() {
    popupEdit.classList.remove('popup_opened');  
    console.log('Закрываем попап');
};
// Функция "сохранить изменения"
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    nameInput.value = '';
    jobInput.value = ''; 
    closeEditPopup();
};



// ПОПАП ДОБАВЛЕНИЯ КАРТОЧЕК
// Находим формы ввода данных карточки
let cardTitleInput = document.querySelector(".popup__input_type_title");
let cardLinkInput = document.querySelector(".popup__input_type_link");
//Функция открытия попапа добавления новых карточек
function openCardAddPopup() {
    popupCardAdd.classList.add('popup_opened');
};
// Функция закрытия попапа добавления карточек
function closeAddPopup() {
    popupCardAdd.classList.remove('popup_opened');  
    console.log('Закрываем попап');
};
// Добавление карточек
function saveNewCard (evt) {
  evt.preventDefault();
  const inputText = cardTitleInput.value;
  const inputLink = cardLinkInput.value;
  const newCardAdd = getCard({name: inputText, link: inputLink});
  elements.prepend(newCardAdd);
  cardTitleInput.value = '';
  cardLinkInput.value = '';
  closeAddPopup();
};

// УДАЛЯЕМ КАРТОЧКИ 
// Находим кнопку Удалить

function handleDelete(event) {
  const eventTarget = event.target;
  const targetItem = eventTarget.closest('.card');
  targetItem.remove();
}

//Находим кнопку лайка


//Лайк
function likeActive(evt) {
    const eventTarget = evt.target;
    const targetLike = eventTarget.closest('.card__like');
    targetLike.classList.toggle('card__like_active');
    console.log('Лайкнули');
};


editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openCardAddPopup);
closeEditButton.addEventListener('click', closeEditPopup);
closeAddButton.addEventListener('click', closeAddPopup);
popupEdit.addEventListener('submit', formSubmitHandler); 
popupCardAdd.addEventListener('submit', saveNewCard);



