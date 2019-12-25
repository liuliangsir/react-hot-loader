import React from 'react';
import classNames from 'classnames';

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? '👌' : '👋'}{' '}
    <span className={classNames('todo-item__text', todo && todo.completed && 'todo-item__text--completed')}>
      {todo.text}
    </span>
  </li>
);

export default Todo;
