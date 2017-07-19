import React from "react";
import { Link } from "react-router";

const AuthorDetailPage = ({ author }) => {
  return (
    <div>
      <Link to="/authors" className="a__backLink">Back to Authors list > </Link>
      <div className="panel panel-default">
        <div className="panel-heading">
          {author.id}
        </div>
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
    </div>
  );
};

export default AuthorDetailPage;
