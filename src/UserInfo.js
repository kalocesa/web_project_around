export default class UserInfo {
  constructor(nameElementSelector, aboutElementSelector, imageElementSelector) {
    this.nameElement = document.querySelector(nameElementSelector);
    this.aboutElement = document.querySelector(aboutElementSelector);
    this.imageElement = document.querySelector(imageElementSelector);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      about: this.aboutElement.textContent,
    };
  }

  setUserAvatar({ avatar }) {
    this.imageElement.src = avatar;
  }

  setUserInfo(name, about) {
    this.nameElement.textContent = name;
    this.aboutElement.textContent = about;
  }
}
