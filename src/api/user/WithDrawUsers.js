import { getAxiosAuthInstance } from '@/api/Index.js'

export async function getWithDrawUserListPage(nowPage, search) {
  const url = `/users/withdraw?size=10&page=${nowPage}&search=${encodeURIComponent(search)}`

  let result = []

  await getAxiosAuthInstance
    .get(url)
    .then((response) => {
        result = response.data
      }
    )
    .catch((error) => {
      console.log(error)
    })

  return result
}

