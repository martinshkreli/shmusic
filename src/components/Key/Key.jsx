import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator'
import './Key.scss';

@autobind
class Key extends Component {
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
    const { accidental, active, note } = this.props;
    return (
      <li
        className={[
          `key-${note}`,
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

Key.propTypes = {
  accidental: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  note: PropTypes.number.isRequired,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
};

export default Key;
