import { createSlice, createAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export const getBookAsync = createAction('book/getBookAsync');
export const addBookAsync = createAction('book/addBookAsync');
export const removeBookAsync = createAction('book/removeBookAsync');
export const editBookAsync = createAction('book/editBookAsync');

function* getBookSaga(action) {
    const data = yield call(() => axios.get('http://localhost:3000/books', action.payload));
    yield put(getBook(data?.data));
  }

  function* addBookSaga(action) {
    const data = yield call(() => axios.post('http://localhost:3000/books', action.payload));
    yield put(addBook(data?.data));
    yield put(getBookAsync());
  }
  
  function* removeBookSaga(action) {
    const data = yield call(() => axios.delete(`http://localhost:3000/books/${action.payload.id}`));
    yield put(removeBook(data?.data));
    yield put(getBookAsync());
  }

  function* editBookSaga(action) {
    const data = yield call(() => axios.put(`http://localhost:3000/books/${action.payload.id}`, action.payload));
    yield put(editBook(data?.data));
    yield put(getBookAsync());
  }

  export function* watchGetBookSaga() {
    yield takeLatest(getBookAsync, getBookSaga);
  }

  export function* watchAddBookSaga() {
    yield takeLatest(addBookAsync, addBookSaga);
  }

  export function* watchRemoveBookSaga() {
    yield takeLatest(removeBookAsync, removeBookSaga);
  }

  export function* watchEditBookSaga() {
    yield takeLatest(editBookAsync, editBookSaga);
  }

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        loading: false,
    },
    reducers: {
        getBook: (state, action) => {
            state.books = action.payload;
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        removeBook: (state, action) => {
            const index = state.books.findIndex((book) => book.id === action.payload.id);
            if(index !== -1) {
                state.books.splice(index, 1);
            }
        },
        editBook: (state, action) => {
            const index = state.books.findIndex((book) => book.id === action.payload.id);
            if(index !== -1) {
                state.books.splice(index, 1, action.payload);
            }
        }
    }
})

const bookReducer = bookSlice.reducer;
export const {getBook, addBook, removeBook, editBook} = bookSlice.actions;
export default bookReducer;
