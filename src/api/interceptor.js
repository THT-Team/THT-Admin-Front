import store from '@/assets/store.js'

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
      console.log(error)
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
      return error
    }
  )
}