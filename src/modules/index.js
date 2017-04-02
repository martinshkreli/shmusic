import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import instrument from './instrument';
export { playNote, stopNote } from './instrument';

export default combineReducers({
  // routing: routerReducer,
  instrument,
});
