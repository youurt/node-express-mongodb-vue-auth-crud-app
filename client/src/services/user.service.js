import axios from 'axios'
import authHeader from './auth.service.header'
import { PROFILE_API_URL as API_URL } from '@/constants/service.constants.js'

// const API_URL = 'http://localhost:8080/user/profile/'

class UserService {
  getProfile(user) {
    return axios
      .get(API_URL + user.id, { headers: authHeader() })
      .then((response) => {
        return response.data
      })
      .catch((e) => {
        console.log(e)
      })
  }

  updateProfile(payload) {
    const { user, formData } = payload

    return axios
      .post(API_URL + user.id, formData, { headers: authHeader() })
      .then((response) => {
        return response.data
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
export default new UserService()
