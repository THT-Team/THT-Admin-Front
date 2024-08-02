import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      apiBaseUrl: 'http://localhost:8080'
    }
  },

  mutations: {
  },

  getters: {
    getApiUrl: state => state.apiBaseUrl
  }

})

export default store
