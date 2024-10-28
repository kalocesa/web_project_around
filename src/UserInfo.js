export default class UserInfo {
  constructor(nameElementSelector, aboutElementSelector) {
    this.nameElement = document.querySelector(nameElementSelector);
    this.aboutElement = document.querySelector(aboutElementSelector);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      about: this.aboutElement.textContent,
    };
  }

  setUserInfo(name, about) {
    this.nameElement.textContent = name;
    this.aboutElement.textContent = about;
  }
}
