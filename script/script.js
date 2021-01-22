let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');


editButton.addEventListener('click', function() {
    formElement.classList.add('popup_opened');
});


// let nameInput = formElement.querySelector(".popup__name");
// let jobInput = formElement.querySelector(".popup__job");


// function formSubmitHandler (evt) 
//     evt.preventDefault(); 

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent


// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler); 