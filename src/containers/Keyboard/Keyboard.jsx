import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator'
// import {} from './config';
import { playNote, stopNote } from '../../modules';
import { Key } from '../../components';

@autobind
@connect(state => ({ activeNote: state.instrument.activeNote }), { playNote, stopNote })
class Keyboard extends Component {
  constructor(props) {
    super(props);
  }
  handleKeys(key, i) {
    const { activeNote, playNote, stopNote } = this.props;
    return (
      {/*<key
        accidental={}
        active={activeNote === note}
        note={}
        onKeyDown={playNote}
        onKeyUp={stopNote}
      >*/}
    );
  }
  render() {
    console.log(this.props);
    return (<div />);
  }
}

Keyboard.defaultProps = {};
Keyboard.propTypes = {};

export default Keyboard;
