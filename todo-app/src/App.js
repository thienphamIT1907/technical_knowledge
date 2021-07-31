import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let localTodos = JSON.parse(localStorage.getItem('todos'));
        setTodos(localTodos)
      }
    }
    getLocalTodos();
  }, [])

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        case 'all':
        default:
          setFilteredTodos(todos)
          break;
      }
    }

    const saveToLocal = () => {
      if(localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    }

    filterHandler()
    saveToLocal()
  }, [todos, status])

  return (
    <div className="App">
      <header>
        <h1>Thien's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        status={status}
        setStatus={setStatus}

      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
