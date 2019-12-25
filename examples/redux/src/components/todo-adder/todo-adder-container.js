import { connect } from 'react-redux';

import TodoAdder from './todo-adder';
import { addTodo } from '../../actions';

export default connect(null, { addTodo })(TodoAdder);
