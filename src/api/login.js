import { simpleInstance } from '@/api/index.js'
import router from '@/router/index.js'
import { ref } from 'vue'

export async function Login(data) {

  let token = ref('')
  await simpleInstance
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


  console.log("1" + token.value)
  return token.value
}