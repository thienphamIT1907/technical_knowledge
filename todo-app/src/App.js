import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Thien's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
