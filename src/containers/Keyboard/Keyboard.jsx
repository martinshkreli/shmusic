import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator'
import generate from './config';
import { playNote, stopNote } from '../../modules';
import { Key } from '../../components';


@connect(state => ({ 
  activeNote: state.instrument.activeNote
}), { playNote, stopNote })
@autobind
class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: generate.keys,
    };
  }
  handleKeys(key, i) {
    const { activeNote, playNote, stopNote } = this.props;
    const { note, number } = key;

    return (
      <Key
        key={i}
        accidental={~note.indexOf('#')}
        active={number === activeNote}
        note={number}
        onKeyDown={playNote}
        onKeyUp={stopNote}
      />
    );
  }
  render() {
    return (
      <ul className="keyboard">
        {this.state.keys.map(this.handleKeys)}
      </ul>
    );
  }
}

Keyboard.defaultProps = {};
Keyboard.propTypes = {};

export default Keyboard;
