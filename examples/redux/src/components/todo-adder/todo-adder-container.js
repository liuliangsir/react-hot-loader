import { connect } from 'react-redux';

import LoadableTodoAdder from './loadable-todo-adder';
import { addTodo } from '../../actions';

export default connect(null, { addTodo })(LoadableTodoAdder);
