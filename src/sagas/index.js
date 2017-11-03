import { call, put, take, fork, cancel, takeLatest } from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* tick() {
  while(true) {
    yield call(delay, 1000);
    yield put({type: 'TICK'});
  }
}

function* startTimer() {
  let tickTask = yield fork(tick);
  
  while (true) {
    const action = yield take(['STOP', 'RESET'])

    if (action.type === 'RESET') {
      yield cancel(tickTask);
      tickTask = yield fork(tick);
    } else {
      yield cancel(tickTask);
      break;
    }
  }
}

export default function* root() {
  yield takeLatest('START', startTimer);
}