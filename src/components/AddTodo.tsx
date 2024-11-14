"use client";
import { addTodo } from "@/lib/features/todos/todoSlice";
import { useAppDispatch } from "@/lib/hooks";
import React, { useState } from "react";

function AddTodo() {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const hangleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <div>
      {/* <h1>Add Todo</h1> */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={hangleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
