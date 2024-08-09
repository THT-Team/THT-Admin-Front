import { getAxiosSimpleInstance } from '@/api/Index.js'
import router from '@/router/index.js'
import { ref } from 'vue'

export async function Login(data) {

  let token = ref('')
  await getAxiosSimpleInstance
    .post('login', {
      id: data.id,
      password: data.password
    })
    .then((response) => {
      token.value = response.data.accessToken
      localStorage.setItem('token', token.value)

      router.push('/')
    })
    .catch((error) => {
      alert(error.response.data.message)
    })

  return token.value
}