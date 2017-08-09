import { loadAuthors } from './authorActions';
import { loadCourses } from './courseActions';
import configureStore from '../store/configureStore'; //eslint-disable-line 
import * as types from './actionTypes';

const store = configureStore();

function loadData(){
    return dispatch => Promise.all([
        store.dispatch(loadCourses()), 
        store.dispatch(loadAuthors())
    ]);
}

store.dispatch(loadData()).then((data)=>{
    // after all data finish loading
    store.dispatch(mapAuthorData(data));
});

export function mapAuthorData(dataArray){
  return {
    type: types.ALL_DATA_LOADED,
    data: dataArray
  };
}

export default store;