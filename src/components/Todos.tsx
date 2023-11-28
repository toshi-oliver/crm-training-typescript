import { useQueryTodos, TodoType } from '../hooks/useQueryTodos'
import { useState } from "react";

// next: 表示まではできたので、postする部分の実装をする
export const Todo = ({ todo }: { todo: TodoType }) => {
  const [checked, setChecked] = useState<boolean>(todo.completed);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div>
        <div key={todo.id}>
          <div>
            <input type="checkbox" checked={checked} onChange={() => handleClick()} />
            <span>{todo.title}</span>
          </div>
        </div>
    </div>
  )
}

export const Todos = () => {
  const {data, error} = useQueryTodos()

  if (!data) {
    return <div>loading...</div>
  }

  return (
    <div>
      {data?.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}
