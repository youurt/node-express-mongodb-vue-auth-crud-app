import axios from 'axios'
import { AUTH_API_URL as API_URL } from '@/constants/service.constants.js'

// const API_URL = 'http://localhost:8080/auth/'

class AuthService {
  login(user) {
    if (user) {
      return axios
        .post(API_URL + 'login', {
          username: user.username,
          password: user.password
        })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data))
          }

          return response.data
        })
    }
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(user) {
    return axios
      .post(API_URL + 'register', {
        username: user.username,
        password: user.password
      })
      .then((response) => {
        return response
      })
  }
}

export default new AuthService()
