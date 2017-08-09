import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import { loadAuthors } from './authorActions';
import store, { mapAuthorData } from './loadDataActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
      return Promise.resolve(courses);
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));

      // calculate author number of videos
      const storeData = getNewStoreData(course);

      dispatch(mapAuthorData([storeData.newCourses, storeData.authors]));

    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

 function getNewStoreData(newCourse){
  const {authors, courses} = store.getState();
  const newCourses = [...courses.filter(course => course.id !== newCourse.id), newCourse];

  return Object.assign({}, {authors}, {newCourses});
} 