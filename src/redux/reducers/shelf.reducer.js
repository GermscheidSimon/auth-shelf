// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

const shelfReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_SHELF':
            return action.payload;
        default:
            return state;
    }
}

export default shelfReducer;