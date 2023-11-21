import React, { useState } from "react";
import { TodoType } from "./Todo";

// 受け取るPropsの型を定義する
type ItemProps = {
  todo: TodoType;
  complete: Function;
  updateTodo: Function;
};

export const Item: React.FC<ItemProps> = ({ todo, complete, updateTodo }) => {
  // テキストのState管理
  const [editingContent, setEditingContent] = useState(todo.content);

  // 編集状態の切り替え
  const editMode = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  // 編集を確定する
  const confirmContent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  return (
    <div key={todo.id}>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        <span onDoubleClick={editMode}>
          {todo.editing ? (
            <input
              type="text"
              placeholder="入力してね"
              value={editingContent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditingContent(e.target.value)
              }
            />
          ) : (
            todo.content
          )}
        </span>
      </form>
      <button onClick={() => complete(todo.id)}>-</button>
    </div>
  );
};