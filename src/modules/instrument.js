import { instrument } from './initialState';

const PLAY_NOTE = 'instrument/PLAY_NOTE';
const STOP_NOTE = 'instrument/STOP_NOTE';

export default (state = instrument, action = {}) => {
  switch (action.type) {
    case PLAY_NOTE:
      return {
        ...instrument,
        inUse: {
          // keyboard: true,
          key: action.payload.note,
        },
      };
    case STOP_NOTE:
      return {
        ...instrument,
        inUse: {
          // keyboard: false,
          key: null,
        },
      };
    default:
      return state;
  }
}

export const playNote = note => {
  return (dispatch, getState) => {
    MIDI.AudioTag.noteOn(0, note, 127, 0);
    dispatch({
      type: PLAY_NOTE,
      payload: { note },
    });
  };
}

export const stopNote = note => {
  return (dispatch, getState) => {
    MIDI.AudioTag.noteOff(0, note, 0);
    dispatch({ type: STOP_NOTE });
  };
}
