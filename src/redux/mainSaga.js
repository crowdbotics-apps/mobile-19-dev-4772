import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4322Saga from '../features/EmailAuth4322/redux/sagas';
import EmailAuth4320Saga from '../features/EmailAuth4320/redux/sagas';
import EmailAuth4319Saga from '../features/EmailAuth4319/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4322Saga,
EmailAuth4320Saga,
EmailAuth4319Saga,
EmailAuthSaga,
    
  ]);
}