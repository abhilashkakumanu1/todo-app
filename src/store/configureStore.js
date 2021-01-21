import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todos";

const configureTodoStore = () => configureStore({ reducer });

export default configureTodoStore;
