import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { deleteTodo, toggleTodo } from "../store/todos";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItem dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.checked}
            tabIndex={-1}
            disableRipple
            onClick={() => dispatch(toggleTodo(todo.value))}
          />
        </ListItemIcon>
        <ListItemText
          primary={todo.value}
          className={todo.checked ? "checked" : ""}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => dispatch(deleteTodo(todo.value))} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default Todo;
