import UserService from '@/services/user.service'
import {
  GET_PROFILE_DATA,
  SET_PROFILE_DATA
} from '@/constants/store.constants.js'

const initialState = { data: {}, formData: {} }

export const profile = {
  namespaced: true,
  state: initialState,
  actions: {
    getProfile({ commit }, user) {
      return UserService.getProfile(user).then(
        (data) => {
          commit(GET_PROFILE_DATA, data)
          return Promise.resolve(data)
        },
        (error) => {
          // @todo: commit('getProfileDataFailure')
          return Promise.reject(error)
        }
      )
    },
    setProfile({ commit }, payload) {
      return UserService.updateProfile(payload).then(
        (data) => {
          commit(SET_PROFILE_DATA, data)
          return Promise.resolve(data)
        },
        (error) => {
          // @todo:  commit('setProfileDataFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    getProfileData(state, data) {
      state.data = data
    },
    setProfileData(state, data) {
      state.data = data
    }
  }
}
