import AuthService from './auth_service'

export default function authHeader() {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.token) {
      return { Authorization: user.token }
    } else {
      return {}
    }
  }
}
