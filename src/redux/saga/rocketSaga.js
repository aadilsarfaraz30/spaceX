import { call, put,  takeEvery,  } from "redux-saga/effects";

const rocketApiUrl = `https://api.spacexdata.com/v4/rockets`;

function getRocketApiData() {
  return fetch(rocketApiUrl)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchrocketData(action) {
  try {
    const rocket = yield call(getRocketApiData);
    yield put({ type: "GET_ROCKET_SUCCESS", rocket: rocket });
  } catch (e) {
    yield put({ type: "GET_ROCKET_FAILED", message: e.message });
  }
}

function* rocketSaga() {
  yield takeEvery("GET_LAUNCH_REQUESTED", fetchrocketData);
}

export default rocketSaga;
