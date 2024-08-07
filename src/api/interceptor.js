import store from '@/assets/store.js'

export function setInterceptors(instance) {

  setRequestInterceptor(instance)
  setResponseInterceptor(instance)

  return instance
}

function setRequestInterceptor(instance) {
  instance.interceptors.request.use(
    function(config) {
      config.headers.Authorization = store.state.accessToken
      return config
    },
    function(err) {
      console.log(err)
      return err
    }
  )
}

function setResponseInterceptor(instance) {
  instance.interceptors.response.use(
    function(config) {
      return config
    },
    function(err) {
      alert(err)
      return err
    }
  )
}