import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    case types.LOAD_COURSES_AND_AUTHORS_SUCCESS:
      debugger;
      return getNumberOfCourses(state, action);
    default:
      return state;
  }
}

function getNumberOfCourses(state) {
  const { courses, authors } = state;

  return [];
}
