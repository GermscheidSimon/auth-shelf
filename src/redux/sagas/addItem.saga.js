import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to shelf.router to get all items from shelf DB
function* addItemSaga(action) {
  try{
    yield axios.post('/api/shelf', action.payload.item)
    yield put({
        type: "FETCH_SHELF"
    })
  } catch(error){
    console.log('Error in addItem SAGA',error);
  }
}

function* addItem() {
    yield takeEvery('ADD_SHELF_ITEM', addItemSaga);
  }

export default addItem;