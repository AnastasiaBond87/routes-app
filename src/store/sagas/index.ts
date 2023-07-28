import { takeEvery } from 'redux-saga/effects';
import getRouteSaga from './route';

function* sagas() {
  yield takeEvery('route/getRouteFetch', getRouteSaga);
}

export default sagas;
