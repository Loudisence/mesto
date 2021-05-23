export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileDescription = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    const userInfoValues = {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent
    };
    return userInfoValues;
  }

  setUserInfo(userInfoValues) {
    this._profileName.textContent = userInfoValues.name;
    this._profileDescription.textContent = userInfoValues.description;
  }
}
