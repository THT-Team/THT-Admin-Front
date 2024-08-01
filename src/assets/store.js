import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      pageName: ''
    }
  },

  mutations:{
    setPageName(state, name) {
      state.pageName = name
    }
  }
})

export default store
