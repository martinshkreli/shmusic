
import {removeAllNotes} from '../actions';

function silence(dispatch) {
  dispatch(removeAllNotes());
}

export default function buildMiddlewareArray({ adminMode = false } = {}) {
  const middlewares = [];

  if (adminMode) {
    const retrieveHandler = createRetrieveHandler({ firebaseAuth });


    middlewares.push(
      createRetrieveMiddleware({
        retrieveHandler,
        requiresAuth: false,
      //  initialCassetteId: getQueryParam({ param: 'cassetteId' }),
      }),
      createReplayMiddleware({
        maximumDelay: 2000,
        // The cassette was not recorded in admin mode, but we need to replay
        // it in admin mode. Without this override, it switches modes on us,
        // and we lose our spiffy VCR :o
        overwriteCassetteState: {
          isAdmin: true,
        },
        onStop: silence,
        onEject: silence,
      })
    );
  } /*else {
    const persistHandler = createPersistHandler({
      firebaseAuth,
      debounceLength: 500,
    });

    middlewares.push(createCaptureMiddleware({
      persistHandler,
      blacklist: [{ matchingCriteria: 'startsWith', type: 'MODALS/' }],
      startTrigger: COMPLETE_ONBOARDING,
      minimumActionsToPersist: 20,
    }));
  }*/

  return middlewares;
}
