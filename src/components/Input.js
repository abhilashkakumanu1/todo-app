import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addTodo } from "../store/todos";

const Input = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  const submitTodo = (event) => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <TextField
        id="standard-basic"
        className="text-box"
        value={input}
        onChange={changeHandler}
      />
      <Button variant="contained" onClick={submitTodo}>
        Add Todo
      </Button>
    </>
  );
};

export default Input;
