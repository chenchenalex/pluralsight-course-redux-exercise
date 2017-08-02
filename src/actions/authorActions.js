/*  eslint-disable no-console */
import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function saveAuthorSuccess(authors) {
  return {type: types.SAVE_AUTHOR_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor(author){
  return dispatch => {
    dispatch(beginAjaxCall());
    console.log('save author success'); 

    return AuthorApi.saveAuthor().then(data => {
      dispatch(saveAuthorSuccess(data));
    }).catch(e => {
      console.error('Failed to save author');
    });

  }

}