import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to shelf.router to get all items from shelf DB
function* fetchShelf() {
  try{
    const shelfResponse = yield axios.get(`/api/shelf`)
    yield put({type: `SET_SHELF`, payload: shelfResponse.data})
  } catch(error){
    console.log('Error in fetch',error);
  }
}

function* shelfSaga() {
    yield takeEvery('FETCH_SHELF', fetchShelf);
  }

export default shelfSaga;