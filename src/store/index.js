import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
    isLoading: false,
    collapse: true,
    isDark: true,
    showloginindex: false,
    showloginnavbar: false,
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('isDark')) {
        if (localStorage.getItem('isDark') === 'false') {
          state.isDark = false
        } else {
          state.isDark = true
        }

      }
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }
      else {
        state.token = ''
        state.isAuthenticated = false
      }
      if (window.innerWidth > 600) {
        state.collapse = false
      } else {
        state.collapse = true
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
