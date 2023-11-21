import { useQueryTodos, TodoType } from '../hooks/useQueryTodos'
import { useState } from "react";

// function Todo() {

// }

const Todos = () => {
  const {data, error} = useQueryTodos()
  console.log(data)
  console.log(error)
  const [todos, setTodos] = useState<TodoType[]>(data || []);

  // 初期データが読み込まれたときにtodosを更新
  // useEffect(() => {
  //   if (data) {
  //     setTodos(data);
  //   }
  // }, [data]);

  if (!data) {
    return <div>loading...</div>
  }

  //リストのままcheckの状態を扱う
  // 1つ１つのtodoに切り出す（Todosでデータフェッチ、Todoで状態の管理）→ネクストでやる
  const handleChange = (id: number) => {
    // todosの状態を更新
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div>
      {data?.map((todo) => (
        //子コンポーネントに切り出す
        <div key={todo.id}>
          <div>
            <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
            <span>{todo.title}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todos;