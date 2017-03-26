
import React from 'react';
import ReactDOM from 'react-dom';
import ShMusic from './ShMusic';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <ShMusic />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
