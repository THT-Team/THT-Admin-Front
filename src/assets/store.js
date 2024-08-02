import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      pageName: 'Home',
      apiBaseUrl: 'http://localhost:8080'
    }
  },

  mutations: {
    setPageName(state, name) {
      state.pageName = name
    }
  },

  getters: {
    getApiUrl: state => state.apiBaseUrl
  }

})

export default store
