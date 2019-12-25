import React from 'react';

export default class TodoAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    const { addTodo } = this.props;
    const { input } = this.state;

    addTodo(input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className="todo-adder-container">
        <input value={this.state.input} onChange={e => this.updateInput(e.target.value)} />
        <button onClick={this.handleAddTodo} className="todo-adder-button">
          Add Todo
        </button>
      </div>
    );
  }
}
