import AuthService from '@/services/auth.service'
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '@/constants/store.constants.js'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      if (user) {
        return AuthService.login(user).then(
          (user) => {
            commit(LOGIN_SUCCESS, user)
            return Promise.resolve(user)
          },
          (error) => {
            commit(LOGIN_FAILURE)
            return Promise.reject(error)
          }
        )
      }
    },
    logout({ commit }) {
      AuthService.logout()
      commit(LOGOUT)
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          commit(REGISTER_SUCCESS)
          return Promise.resolve(response.data)
        },
        (error) => {
          commit(REGISTER_FAILURE)
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout(state) {
      state.status.loggedIn = false
      state.user = null
    },
    registerSuccess(state) {
      state.status.loggedIn = false
    },
    registerFailure(state) {
      state.status.loggedIn = false
    }
  }
}
