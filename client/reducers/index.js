import { combineReducers } from 'redux';

import notes from './notes.reducer';
import oscillators from './oscillators.reducer';
import onboarding from './onboarding.reducer';

export default combineReducers({
  notes,
  oscillators,
  onboarding
});
