import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { TodoAdder } from '../../components';
// import asyncComponent from '../../utils/asyncComponent';
import './todo-container.css';

// const TodoAdder = asyncComponent(() => import('../../components/todo-adder').then(module => module.TodoAdder));

export default function TodoContainer() {
  return (
    <Router>
      <div className="todo-content">
        <Switch>
          <Route exact path="/" component={TodoAdder} />
        </Switch>
      </div>
    </Router>
  );
}
