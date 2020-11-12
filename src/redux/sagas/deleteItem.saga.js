import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//send axios request to shelf.router to get all items from shelf DB
function* deleteItemSaga(action) {
  try{
    const results = yield axios.delete(`/api/shelf/${action.payload.id}`, )
    // yield console.log(results);
    // yield  (results.data.rowCount == 0) {
    //         alert('nothing was deleted')
    //       }   
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