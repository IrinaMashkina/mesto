// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 
// Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._userName = document.querySelector(nameSelector);
        this._userJob = document.querySelector(jobSelector);
    }
    getUserInfo() {
        this._userInformation = {};
        this._userInformation.name = this._userName.textContent;
        this._userInformation.job = this._userJob.textContent;
        return this._userInformation;
    }
    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.job;    
    }
}