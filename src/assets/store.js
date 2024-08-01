import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      pageName: 'Home'
    }
  },

  mutations:{
    setPageName(state, name) {
      state.pageName = name
    }
  }
})

export default store
