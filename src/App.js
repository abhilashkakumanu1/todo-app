import React from "react";
import Container from "@material-ui/core/Container";
import configureAppStore from "./store/configureStore";
import { Provider } from "react-redux";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Input />
        <TodoList />
      </Container>
    </Provider>
  );
}

export default App;
