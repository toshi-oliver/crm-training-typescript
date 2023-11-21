import { useState } from "react";
import List from "./List";
import Form from "./Form";

// TODOの型を定義する
export type TodoType = {
  id: number;
  content: string;
  editing: boolean;
};

const Todo = () => {

  // デフォルトのTODOリスト
  const todosList = [
    {
      id: 1,
      content: "店を予約する",
      editing: false,
    },
    {
      id: 2,
      content: "卵を買う",
      editing: false,
    },
    {
      id: 3,
      content: "郵便を出す",
      editing: false,
    },
  ];

  // TODOリストのState管理
  const [todos, setTodos] = useState<TodoType[]>(todosList);

  // 削除
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  // 作成
  const createTodo = (todo: TodoType) => {
    setTodos([...todos, todo]);
  };

  // 更新
  const updateTodo = (todo: TodoType) => {
    const newTodos = todos.map((_todo) => {
      return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
    });
    setTodos(newTodos);
  };

  return (
    // 各々に必要なPropsを渡す
    <>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};
export default Todo;