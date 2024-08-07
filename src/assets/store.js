import { createStore } from 'vuex'
import router from '@/router/index.js'
import { Login } from '@/api/login.js'

const store = createStore({
  state() {
    return {
      accessToken: ''
    }
  },

  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token
    }
  },

  getters: {
    getApiUrl: state => ''
  },
  actions: {
    async postLogin(context, data) {
      await Login(data).then(
        (accessToken) =>
          context.commit('setAccessToken', accessToken)
      )
    },

    getAccountInfo() {
      let accessToken = localStorage.getItem('access_token')
      console.log(accessToken)

      if (accessToken == null) {
        alert('로그인을 해주세요')
        router.push('/login')
      }

      return accessToken
    }
  }
})

export default store
