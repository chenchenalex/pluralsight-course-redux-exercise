import React, {PropTypes} from "react";
import { browserHistory, Link } from "react-router";
import Modal from '../common/Modal';
import { DeleteAuthorModalData } from '../../contents/modalContents';
import bootstrap from 'bootstrap';

const AuthorDetailPage = ({ author , courses, onDelete}) => {
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

  const redirectToEditAuthor = ()=>{
    browserHistory.push(`/author/edit/${author.id}`);
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

      <div className="btn-group btn__author-actions">
        <button className="btn btn-primary" onClick={redirectToEditAuthor}>Edit</button>
        <button className="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
      </div>

      <Modal  id="deleteModal"
              action={onDelete}
              messages={DeleteAuthorModalData}/>
    </div>
  );
};

AuthorDetailPage.propTypes = {
  author: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default AuthorDetailPage;
