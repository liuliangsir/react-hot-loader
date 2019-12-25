import { connect } from 'react-redux';

import TodoList from './todo-list';
import { getAllTodo } from '../../selectors';

const mapStateToProps = state => ({
  todos: getAllTodo(state),
});
export default connect(mapStateToProps)(TodoList);
