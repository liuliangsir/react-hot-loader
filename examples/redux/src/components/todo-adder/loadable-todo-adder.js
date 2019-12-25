import React from 'react';
import loadable from 'react-loadable';

import Loading from '../loading';

const LoadableComponent = loadable({
  loader: () => import('./todo-adder'),
  loading: Loading,
});

export default class LoadableTodoAdder extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}
