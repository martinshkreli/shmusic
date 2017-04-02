import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../modules';

export default (initialState = {}) => {
  const middleware = [
    reduxImmutableStateInvariant(), // remove from prod
    thunk,
  ];

  const enhancer = applyMiddleware(...middleware);
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../modules', () => {
      const nextReducer = require('../modules').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
