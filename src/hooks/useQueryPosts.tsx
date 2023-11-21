import { useQuery } from 'react-query'

type Post = {
  userId: number,
  id: number
  title: string
  body:string
}

// 次回（10/31）はtodos/{id}で取得できるようuseStateを使う
export const useQueryPosts = () => {
  const getPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    )
    return response.json()
  }

  return useQuery<Post[], Error>('posts', getPosts, {
    staleTime: 0,
    refetchOnWindowFocus: true,
    //cacheTime: 5000,
    //refetchInterval: 5000,
  })
}