import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { mapAuthorData } from '../utils/dataMapping';

export default function authorReducer(state = initialState.authors, action) {
  let authors, courses;
      
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    case types.SAVE_AUTHOR_SUCCESS:
      if(!action.author.numberOfVideos) action.author.numberOfVideos = 0;

      return [
        ...state.filter(author => author.id !== action.author.id),
        action.author
      ];

    case types.ALL_DATA_LOADED:
      [courses, authors] = [...action.data];
      return mapAuthorData(courses, authors);

    case types.DELETE_AUTHOR_SUCCESS: 
      return [
        ...state.filter(author => author.id !== action.id)
      ];

    default:
      return state;
  }
}

