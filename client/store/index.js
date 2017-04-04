import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import buildMiddlewareArray from '../utils/build-middleware-array';
import { getQueryParams } from '../utils/misc-helpers';

export default function configureStore() {
  // If we're in admin mode, we don't want to persist, we only want to record.
  // let { adminMode } = getQueryParams();
  // convert string/undefined to boolean
  // adminMode = adminMode === 'true';

  // const reducer = adminMode ? wrapReducer(rootReducer) : rootReducer;
  const reducer = rootReducer;

  //const middlewares = buildMiddlewareArray({ adminMode });
  const middlewares = buildMiddlewareArray({ false });
  const store = createStore(
    reducer,
    compose(
      applyMiddleware.apply(this, middlewares)
    )
  );

  /*if (adminMode) {
    store.dispatch(setAdminMode({ adminMode }));
  }

  if (adminMode || localStorage.getItem(ONBOARDING_COMPLETED_FLAG)) {
    store.dispatch(completeOnboarding());
  }*/

  return store;
}
