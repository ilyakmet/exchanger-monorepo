// Redux
import { takeEvery, put } from 'redux-saga/effects';

// Types
// import { ReduxActionType } from '../../interfaces';

// Action types
import { INCREMENT_CALL, INCREMENT } from '../types';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementAction() {
  yield delay(3000);
  console.log('incrementCall');
  yield put({ type: INCREMENT });
}

export function* counterStream() {
  yield takeEvery(INCREMENT_CALL, incrementAction);
}
