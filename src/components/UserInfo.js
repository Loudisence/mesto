export default class UserInfo {
  constructor({ name, description, avatar }) {
    this._profileName = name;
    this._profileDescription = description;
    this._profileAvatar = avatar;
  }

  getUserInfo() {
    const userInfoValues = {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
      avatar: this._profileAvatar.src
    };
    return userInfoValues;
  }

  setUserInfo(userInfoValues) {
    this._profileName.textContent = userInfoValues.name;
    this._profileDescription.textContent = userInfoValues.about;
    this._profileAvatar.src = userInfoValues.avatar
  }
}
