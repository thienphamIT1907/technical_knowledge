import React from 'react';

function Todo({text, todo, todos, setTodos}) {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const completedHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }
  return (
    <div className='todo'>
      <li className={
        `todo-item ${todo.completed
          ? 'completed'
          : ''
        }`
      }>{text}</li>
      <button
        className='complete-btn'
        onClick={completedHandler}
      >
        <i className='fas fa-check'/>
      </button>
      <button
        className='trash-btn'
        onClick={deleteHandler}
      >
        <i className='fas fa-trash'/>
      </button>
    </div>
  );
}

export default Todo;
