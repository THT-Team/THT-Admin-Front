import store from '@/assets/store.js'
import { HttpStatusCode } from 'axios'

export function setInterceptors(instance) {

  setRequestInterceptor(instance)
  setResponseInterceptor(instance)

  return instance
}

function setRequestInterceptor(instance) {
  instance.interceptors.request.use(
    function(config) {
      config.headers.Authorization = "Bearer " + store.getters.accessToken
      return config
    },
    function(error) {
      return error
    }
  )
}

function setResponseInterceptor(instance) {
  instance.interceptors.response.use(
    function(config) {
      return config
    },
    function(error) {
      alert(error.response.data.message)
      checkUnAuthorizationToken(error.response.status)
      return error
    }
  )
}

function checkUnAuthorizationToken(statusCode){

  if (statusCode === HttpStatusCode.Unauthorized) {
    alert("로그인 화면으로 이동합니다.")
    store.dispatch('logout')
  }
}