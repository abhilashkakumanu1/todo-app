import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (todos, action) => {
      todos.push({
        value: action.payload,
        checked: false,
      });
    },
    deleteTodo: (todos, action) => {
      const index = todos.findIndex((todo) => todo.value === action.payload);
      todos.splice(index, 1);
    },
    toggleTodo: (todos, action) => {
      const index = todos.findIndex((todo) => todo.value === action.payload);
      todos[index]["checked"] = !todos[index]["checked"];
    },
  },
});
export const { addTodo, deleteTodo, toggleTodo } = slice.actions;
export default slice.reducer;
