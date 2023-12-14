import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/shelf', config);

    // This is so that we don't get errors when the server hasn't been implemented
    if (typeof response.data === 'object') {
      yield put({ type: 'SET_SHELF', payload: response.data });
    }
  } catch (error) {
    console.log('Shelf get request failed', error);
  }
}

function* submitShelf(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('/api/shelf', action.payload, config);
    yield put({ type: 'FETCH_SHELF' });
  } catch (error) {
    console.log('Shelf post request failed', error);
  }
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
  yield takeLatest('SUBMIT_SHELF', submitShelf);
}

export default shelfSaga;
