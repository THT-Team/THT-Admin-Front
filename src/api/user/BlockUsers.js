import { getAxiosAuthInstance } from '@/api/Index.js'

export async function getBlockListPage(nowPage, search) {
  const url = `/users/block?size=10&page=${nowPage}&search=${encodeURIComponent(search)}`

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

