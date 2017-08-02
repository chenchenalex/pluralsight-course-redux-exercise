import React, {PropTypes} from "react";
import { Link } from "react-router";

const AuthorDetailPage = ({ author , courses}) => {
  const courseList = () => {
    return (
      <table className="table courseList">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {courses.length ? courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.category}</td>
                <td>{course.length}</td>
              </tr>
            );
          }) : 'No videos from this author yet'}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <Link to="/authors" className="a__backLink">Back to Authors list > </Link>
      <div className="panel panel-default">
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {author.firstName}
              </td>
              <td>
                {author.lastName}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
        {courseList()}
    </div>
  );
};

AuthorDetailPage.propTypes = {
  author: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

export default AuthorDetailPage;
