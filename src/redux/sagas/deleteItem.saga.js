import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to shelf.router to get all items from shelf DB
function* deleteItemSaga(action) {
  try{
    yield axios.delete(`/api/shelf/${action.payload.id}`, )
    yield put({
        type: "FETCH_SHELF"
    })
  } catch(error){
    console.log('Error in delete item SAGA',error);
  }
}

function* deleteItem() {
    yield takeEvery('DELETE_ITEM', deleteItemSaga);
  }

export default deleteItem;