import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  bin: Todo[];
}

const initialState: TodosState = {
  todos: [],
  bin: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const deletedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (deletedTodo) {
        state.bin.push(deletedTodo);
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: number; newText: string }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const restoredTodo = state.bin.find((todo) => todo.id === action.payload);
      if (restoredTodo) {
        state.todos.push(restoredTodo);
        state.bin = state.bin.filter((todo) => todo.id !== action.payload);
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, restoreTodo } = todosSlice.actions;
export default todosSlice.reducer;
