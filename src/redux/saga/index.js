import { all } from "redux-saga/effects";
import launchSaga from "./launchSaga";
import rocketSaga from "./rocketSaga";

export default function* rootSaga(){
    yield all([
        launchSaga(),
        rocketSaga()
    ])
}