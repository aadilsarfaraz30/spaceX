import { call, put,  takeEvery,  } from "redux-saga/effects";

const launchApiUrl = `https://api.spacexdata.com/v4/launches`;

function getLaunchApiData() {
  return fetch(launchApiUrl)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchLaunchData(action) {
  try {
    const launch = yield call(getLaunchApiData);
    yield put({ type: "GET_LAUNCH_SUCCESS", launch: launch });
  } catch (e) {
    yield put({ type: "GET_LAUNCH_FAILED", message: e.message });
  }
}

function* launchSaga() {
  yield takeEvery("GET_LAUNCH_REQUESTED", fetchLaunchData);
}

export default launchSaga;
