import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator'

@autobind
class Key extends Component {
  static propTypes = {
    accidental: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    note: PropTypes.number.isRequired,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  handleMouseDown() {}
  handleMouseUp() {}
  handleMouseOver() {}
  handleMouseOut() {}
  render() {
    return (
      <li
        className={[
          'key',
          (accidental ? 'black' : 'white'),
          (active ? 'active' : ''),
        ].join(' ')}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      />
    );
  }
}

export default Key;
