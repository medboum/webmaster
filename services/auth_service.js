import axios from "axios"

class AuthService {
  /*
  login(username, password){
    return axios
      .post(API_URL +"singin",{
        username,
        password
      })
      .then(Response =>){
        localStorage.setItem("user");
      }
  }
  */
  
  static setUserData(user) {
    localStorage.setItem('user', user)
  }

  static getToken(token) {
    return localStorage.getItem('token')
  }

  static hasToken() {
    return !!localStorage.getItem('token')
  }

  static deleteToken() {
    localStorage.removeItem('token')
  }

  static setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getUserData() {
    
    return JSON.parse(localStorage.getItem('user'))
  }

  static deleteUserData() {
    localStorage.removeItem('user')
  }
}

export { AuthService }
