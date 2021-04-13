export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(avatarSelector)
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }

  setNewAvatar(data) {
    this._userAvatar.src = data.avatar;
  }
}
