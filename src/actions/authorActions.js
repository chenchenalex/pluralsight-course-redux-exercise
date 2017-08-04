/*  eslint-disable no-console */
import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

function saveAuthorSuccess(author) {
  return {type: types.SAVE_AUTHOR_SUCCESS, author};
}

function saveAuthorFailed(error) {
  return {type: types.SAVE_AUTHOR_FAILED, error};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    
    return AuthorApi.getAllAuthors().then(authors => {

      dispatch(loadAuthorsSuccess(authors));
      return Promise.resolve(authors);
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor(author){
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(data => {
      dispatch(saveAuthorSuccess(data));
    }).catch(error => {
      dispatch(saveAuthorFailed(error));
      throw(error);
    });
  };
}
