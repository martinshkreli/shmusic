import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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

class ShMusic extends Component {

_play(note) {
  //console.log(note);
  if (note == 'c') {
    var c = new Audio('public/c.wav');
    c.oncanplaythrough = function(){
      c.play();
    }
    c.loop = false;
    c.onended = function(){
    }
  }
  if (note == 'csharp') {
    var csharp = new Audio('public/csharp.wav');
    csharp.oncanplaythrough = function(){
      csharp.play();
    }
    csharp.loop = false;
    csharp.onended = function(){
    }
  }
  if (note == 'd') {
    var d = new Audio('public/d.wav');
    d.oncanplaythrough = function(){
      d.play();
    }
    d.loop = false;
    d.onended = function(){
    }
  }
}

  render() {
    return (
      <div>
        <FlatButton
          backgroundColor="#cdd234"
          label="Home"
        />
        <FlatButton
          backgroundColor="#ffffff"
          style={cKeyStyle}
          onClick={this._play.bind(this, 'c')}
        />
        <FlatButton
          backgroundColor="#ffffff"
          style={dKeyStyle}
        />
        <FlatButton
          backgroundColor="#ffffff"
          style={eKeyStyle}
        />
        <FlatButton
          backgroundColor="#000000"
          hoverColor="#d3d3d3"
          style={cSharpKeyStyle}
          onClick={this._play.bind(this, 'csharp')}
        />
        <FlatButton
          backgroundColor="#000000"
          hoverColor="#d3d3d3"
          style={dSharpKeyStyle}
        />
      </div>
    )
  }
}

export default ShMusic;
