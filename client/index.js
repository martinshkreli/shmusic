import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import initializeWebAudioReconciler from './utils/web-audio-reconciler';
import WebAudioManager from './utils/web-audio-manager';
import { isMobile, isModern } from './utils/misc-helpers';
import configureStore from './store';
injectTapEventPlugin();
const store = configureStore();

// Initialize our reconciler.
// This is how our sounds update in response to Redux state changes. A
// `subscribe` function is passed which compares the old state to the new,
// and makes any changes required.
initializeWebAudioReconciler({ store, manager: WebAudioManager });

// Handle unsupported devices and browsers.
let appComponent = <App />
ReactDOM.render(
  <Provider store={store}>
    {appComponent}
  </Provider>,
  document.getElementById('app')
  );
