import React from 'react';
import classNames from "classnames";
import './style.scss'

const TodoList = ({todoList, onClickTodoItem}) => {
  const onItemClick = (todo, index) => {
    if (!onClickTodoItem) return;
    onClickTodoItem(todo, index)
  }
  return (
    <>
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={classNames({
              'todo-item': true,
              completed: todo.status === 'completed'
            })}
            onClick={() => onItemClick(todo, index)}
          >{todo.id} - {todo.task}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
