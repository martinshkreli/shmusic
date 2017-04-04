import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import {addNote, removeNote} from '../actions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  shouldEventTriggerAction,
  getNoteAndLetter,
} from '../utils/keyboard-helpers';

let cKeyStyle = {
  left: 100,
  top: 100,
  height: 300,
  width: 50,
  position: 'absolute',
  border: '1px solid black',
  minWidth: 0
};
let dKeyStyle = {
  left: 150,
  top: 100,
  height: 300,
  width: 50,
  position: 'absolute',
  border: '1px solid black',
  minWidth: 0
};
let eKeyStyle = {
  left: 200,
  top: 100,
  height: 300,
  width: 50,
  position: 'absolute',
  border: '1px solid black',
  minWidth: 0
};
let cSharpKeyStyle = {
  left: 130,
  top: 100,
  height: 150,
  width: 40,
  position: 'absolute',
  border: '1px solid white',
  zIndex: 5,
  minWidth: 0
};
let dSharpKeyStyle = {
  left: 180,
  top: 100,
  height: 150,
  width: 40,
  position: 'absolute',
  border: '1px solid white',
  minWidth: 0
};

class ShMusic extends PureComponent {
  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handlePress);
    window.addEventListener('keyup', this.handleRelease);
  }

  handlePress(ev) {
    const [noteValue, letter] = getNoteAndLetter(ev);
    const isValid = shouldEventTriggerAction({
      ev,
      noteValue,
      currentNotes: this.props.notes,
      mode: 'press'
    });

    if(isValid){
      this.props.addNote({value: noteValue, letter});
    }
  }

  handleRelease(ev) {

    const [noteValue] = getNoteAndLetter(ev);
    const isValid = shouldEventTriggerAction({
      ev,
      noteValue,
      currentNotes: this.props.notes,
      mode: 'release',
    });

    if (isValid) {
      this.props.removeNote({ value: noteValue });
    }
  }

  _play(note) {
    if (note == 'c') {
      var c = new Audio('c.wav');
      c.oncanplaythrough = function(){
        c.play();
      }
      c.loop = false;
      c.onended = function(){}
    }
    if (note == 'csharp') {
      var csharp = new Audio('public/csharp.wav');
      csharp.oncanplaythrough = function(){
        csharp.play();
      }
      csharp.loop = false;
      csharp.onended = function(){}
    }
    if (note == 'd') {
      var d = new Audio('public/d.wav');
      d.oncanplaythrough = function(){
        d.play();
      }
      d.loop = false;
      d.onended = function(){}
    }
  }

  render() {
    return (
      <div>
        <FlatButton
          backgroundColor="#cdd234"
          label="Home"
          primary={false}
        />
        <FlatButton
          backgroundColor="#ffffff"
          style={cKeyStyle}
          label=" "
          onClick={this._play.bind(this, 'c')}
          primary={false}
        />
        <FlatButton
          backgroundColor="#ffffff"
          style={dKeyStyle}
          label=" "
          primary={false}
        />
        <FlatButton
          backgroundColor="#ffffff"
          style={eKeyStyle}
          label=" "
          primary={false}
        />
        <FlatButton
          backgroundColor="#000000"
          hoverColor="#d3d3d3"
          style={cSharpKeyStyle}
          onClick={this._play.bind(this, 'csharp')}
          label=" "
          primary={false}
        />
        <FlatButton
          backgroundColor="#000000"
          hoverColor="#d3d3d3"
          style={dSharpKeyStyle}
          label=" "
          primary={false}
        />
      </div>
    )
  }
}

ShMusic.propTypes = {
//  layout: PropTypes.arrayOf(PropTypes.array).isRequired,
  enabled: PropTypes.bool,
  notes: PropTypes.arrayOf(PropTypes.object),
  addNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  notes: state.notes
});


export const KeyboardPresentational = ShMusic;

export default connect(mapStateToProps, {addNote, removeNote})(ShMusic);
