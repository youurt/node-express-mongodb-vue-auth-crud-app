import { createStore } from 'vuex'
import { auth } from '@/store/auth.module'
import { profile } from '@/store/profile.module'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, profile }
})
