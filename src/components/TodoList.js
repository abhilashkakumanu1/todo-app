import React from "react";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state);
  return (
    <List>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </List>
  );
};
export default TodoList;
