"use client";

import { restoreTodo } from "@/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";

function RecycleBin() {
  const deletedTodos = useAppSelector((state) => state.todos.bin);
  const dispatch = useAppDispatch();

  const handleRestoreTodo = (id: number) => {
    dispatch(restoreTodo(id));
  };
  return (
    <div>
      <h1>Recycle Bin</h1>
      <ul>
        {deletedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRestoreTodo(todo.id)}>Restore</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecycleBin;