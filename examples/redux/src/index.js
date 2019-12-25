import React from 'react';
import {render} from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import store from './store'
import App from './containers';

const root = document.createElement('div');
document.body.appendChild(root);

const AppDnD = DragDropContext(HTML5Backend)(App);
render(
  <AppDnD store={store} />,
  root
);
