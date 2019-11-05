import { all, put, call, takeLatest } from "redux-saga/effects";

import { RANDOM_TEXT_URL } from "./api";

function* fetchRandomText() {
  try {
    const response = yield call(fetch, RANDOM_TEXT_URL);
    const result = yield response.json();
    yield put({
      type: "FETCH_RANDOM_TEXT_SUCCESS",
      payload: { randomText: result }
    });
  } catch (error) {
    yield put({
      type: "FETCH_RANDOM_TEXT_ERROR",
      payload: { error }
    });
  }
}

function* watchFetchRandomText() {
  yield takeLatest("FETCH_RANDOM_TEXT", fetchRandomText);
}

function* rootSaga() {
  yield all([watchFetchRandomText()]);
}

export default rootSaga;
