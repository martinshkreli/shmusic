import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import exec from './lib/MIDI.exec.js';
import configureStore from './store';
import { App } from './containers';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
