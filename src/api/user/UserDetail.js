import { getAxiosAuthInstance } from '@/api/Index.js'

let data = new Map()

export async function getUserDetail(uuid) {

  if (data.get(uuid) == null || undefined) {

    await getAxiosAuthInstance
      .get(`user/${uuid}`)
      .then((response) => {
        data.set(uuid, response.data)
        console.log(uuid + ' : 유저 디테일 정보 갱신')
      })
  }

  return await data.get(uuid)
}