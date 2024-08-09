import axios from 'axios'
import { setInterceptors } from '@/api/Interceptor.js'

let BASE_URL = 'http://localhost:8080'

function createInstance (){
  return axios.create({
    baseURL: BASE_URL
  })
}

function createInstanceWithAuth() {
  return setInterceptors(createInstance())
}

export const getAxiosSimpleInstance = createInstance()
export const getAxiosAuthInstance = createInstanceWithAuth()