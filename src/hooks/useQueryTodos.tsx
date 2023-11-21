import { useQuery } from 'react-query'

export type TodoType = {
  userId: number,
  id: number
  title: string
  completed: boolean
}
export const useQueryTodos = () => {
  const getTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    )
    return response.json()
  }

  return useQuery<TodoType[], Error>('todos', getTodos, {
    staleTime: 0,
    refetchOnWindowFocus: true,
    //cacheTime: 5000,
    //refetchInterval: 5000,
  })
}