
class produitService {

  static setProduitData(user) {
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

 



  static deleteUserData() {
    localStorage.removeItem('user')
  }
  
}

export { produitService }
