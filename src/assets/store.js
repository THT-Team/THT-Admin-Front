import { createStore } from 'vuex'
import router from '@/router/index.js'
import { Login } from '@/api/login.js'

const store = createStore({
  state() {
    return {
      accessToken: null
    }
  },

  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token
    }
  },

  getters: {
    accessToken: state => {
      if (state.accessToken == null) {
        state.accessToken = localStorage.getItem('accessToken')
      }

      if (state.accessToken == null) {
        alert('로그인을 해주세요')
        router.push('/login')
      }

      return state.accessToken
    }
  },

  actions: {
    async postLogin(context, data) {
      await Login(data).then(
        (accessToken) =>
          context.commit('setAccessToken', accessToken)
      )
    }
  }
})

export default store
