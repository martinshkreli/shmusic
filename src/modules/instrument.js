import { instrument } from './initialState';

const PLAY_NOTE = 'instrument/PLAY_NOTE';
const STOP_NOTE = 'instrument/STOP_NOTE';

export default (state = instrument, action = {}) => {
  switch (action.type) {
    case PLAY_NOTE:
      return {
        ...instrument,
        activeNote: action.payload.note,
      };
    case STOP_NOTE:
      return {
        ...instrument,
        activeNote: null,
      };
    default:
      return state;
  }
}

export const playNote = note => {
  return (dispatch, getState, { midi }) => {
    // midi.noteOn(channel, note, velocity, delay);
    dispatch({
      type: PLAY_NOTE,
      payload: { note },
    });
  };
}

export const stopNote = note => {
  return (dispatch, getState, { midi }) => {
    // midi.noteOff(channel, note, delay);
    dispatch({ type: STOP_NOTE });
  };
}
