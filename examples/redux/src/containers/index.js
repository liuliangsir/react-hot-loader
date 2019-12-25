import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import TodoContainer from './todo-container'

const App = ({ store }) => (
  <Provider store={store}>
    <TodoContainer />
  </Provider>
);

export default hot(App);
