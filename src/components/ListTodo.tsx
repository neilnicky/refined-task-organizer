"use client";

import {
  deleteTodo,
  editTodo,
  toggleTodo,
} from "@/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

function ListTodo() {
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditedText(text);
  };

  const handleUpdateTodo = (id: number) => {
    if (editedText.trim()) {
      dispatch(editTodo({ id, newText: editedText.trim() }));
      setEditingTodoId(null);
      setEditedText("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>
              Edit
            </button>
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => handleUpdateTodo(todo.id)}>Save</button>
                <button onClick={() => setEditingTodoId(null)}>Cancel</button>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
