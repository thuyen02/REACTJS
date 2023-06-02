import { all } from "redux-saga/effects";
import { watchAddBookSaga, watchEditBookSaga, watchGetBookSaga, watchRemoveBookSaga } from ".";

export default function* rootSaga() {
    yield all([watchGetBookSaga(), watchAddBookSaga(), watchRemoveBookSaga(), watchEditBookSaga()]);
}