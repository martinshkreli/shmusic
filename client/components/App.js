import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import ShMusic from './ShMusic';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configure from '../store';
import keyboardLayout from '../data/keyboard-layout';

const App = () => (
  <MuiThemeProvider>
    <ShMusic
      layout={keyboardLayout}
    />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

const mapStateToProps = state => ({
  isAdmin: false
});

export default connect(mapStateToProps)(App);
