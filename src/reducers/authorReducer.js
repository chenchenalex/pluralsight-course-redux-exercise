import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  let authors, courses;
      
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case types.SAVE_AUTHOR_SUCCESS:
      action.author.numberOfVideos = 0;

      return [
        ...state.filter(author => author.id !== action.author),
        action.author
      ];
    case types.ALL_DATA_LOADED:
      [courses, authors] = [...action.data];
      return mapAuthorData(courses, authors);
    default:
      return state;
  }
}

function mapAuthorData(courses, authors) {

  const mappedAuthors = authors.map(author => {
    let newAuthor = Object.assign({}, author); 
    // MUST BE IMMUTABLE! changing author inside authors map will mutate original value!

    newAuthor.numberOfVideos = courses.filter(
      course => course.authorId === author.id).length;

     return newAuthor;
  });

  return mappedAuthors;
}
