import { connect } from 'react-redux';

import Todo from './todo';
import { toggleTodo } from '../../actions';

export default connect(null, { toggleTodo })(Todo);
