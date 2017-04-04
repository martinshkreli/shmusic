// ////////////////////////
// ACTION TYPES //////////
// //////////////////////

export const ADD_NOTE = 'NOTES/ADD_NOTE';
export const REMOVE_NOTE = 'NOTES/REMOVE_NOTE';
export const REMOVE_ALL_NOTES = 'NOTES/REMOVE_ALL_NOTES';

// ////////////////////////
// ACTION CREATORS ///////
// //////////////////////

export const addNote = ({ value, letter }) => ({
  type: ADD_NOTE,
  value,
  letter,
});

export const removeNote = ({ value }) => ({
  type: REMOVE_NOTE,
  value,
});

export const removeAllNotes = () => ({
  type: REMOVE_ALL_NOTES,
});
