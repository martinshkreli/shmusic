import React from 'react';
import ReactDOM from 'react-dom';
import ShMusic from './ShMusic';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <ShMusic />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
