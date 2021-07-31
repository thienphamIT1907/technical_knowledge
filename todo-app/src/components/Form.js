import React from "react";

function Form({setInputText, todos, setTodos, inputText, setStatus, status}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.trunc(Math.random() * 1000),
        text: inputText,
        completed: false
      }
    ])
    setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={submitTodoHandler}
      >
        <i className="fas fa-plus-square"/>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
