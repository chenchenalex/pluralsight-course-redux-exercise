import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import errorMessage from './errorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  errorMessage
});

export default rootReducer;
