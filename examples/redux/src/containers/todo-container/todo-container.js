import React from 'react';
import { TodoAdder, TodoList } from '../../components';

import './todo-container.css';

export default function TodoContainer() {
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <TodoAdder />
      <TodoList />
    </div>
  );
}
