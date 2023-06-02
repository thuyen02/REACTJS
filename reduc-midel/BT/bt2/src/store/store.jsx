import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bookReducer from ".";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        book: bookReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(rootSaga);