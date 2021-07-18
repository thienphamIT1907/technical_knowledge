import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const initTodoList = [
    {
      id: Math.trunc(Math.random() *1000),
      task: 'Coding',
      status: 'completed'
    },
    {
      id: Math.trunc(Math.random() *1000),
      task: 'Eating',
      status: 'new'
    },
    {
      id: Math.trunc(Math.random() *1000),
      task: 'Sleeping',
      status: 'completed'
    },
    {
      id: Math.trunc(Math.random() *1000),
      task: 'Fucking',
      status: 'completed'
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState('all')

  const handleClickTodoItem = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new'
    };

    setTodoList(newTodoList)
  }
  const onShowAll = () => {
    setFilterStatus('all')
  }

  const onShowCompleted = () => {
    setFilterStatus('completed')
  }

  const onShowNew = () => {
    setFilterStatus('new')
  }

  const filteredList = todoList.filter(
    item => (filterStatus === 'all' || filterStatus === item.status)
  )

  const handleSubmitAdd = (todo) => {
    setTodoList([
      ...todoList,
      {
        id: Math.trunc(Math.random() *1000),
        task: todo.task,
        status: 'new'
      }
    ])
  }


  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleSubmitAdd}/>
      <TodoList todoList={filteredList} onClickTodoItem={handleClickTodoItem}/>
      <div>
        <button onClick={onShowAll}>All</button>
        <button onClick={onShowCompleted}>Completed</button>
        <button onClick={onShowNew}>New</button>
      </div>
    </div>
  );
};

export default App;
