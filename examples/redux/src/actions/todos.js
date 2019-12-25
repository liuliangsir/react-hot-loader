import { ADD_TODO, FILTER_TODO, TOGGLE_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text,
    id: ++nextTodoId,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const filterTodo = filter => ({
  type: FILTER_TODO,
  payload: { filter },
});
