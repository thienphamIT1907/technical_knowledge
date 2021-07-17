import React, {useState} from 'react';
import TodoList from "./components/TodoList";

const App = () => {
  const initTodoList = [
    {
      id: 1,
      task: 'Coding',
      status: 'completed'
    },
    {
      id: 2,
      task: 'Eating',
      status: 'new'
    },
    {
      id: 3,
      task: 'Sleeping',
      status: 'completed'
    },
    {
      id: 4,
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

  return (
    <div>
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
