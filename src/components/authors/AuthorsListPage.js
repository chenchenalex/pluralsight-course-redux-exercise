import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/authorActions.js";
import { bindActionCreators } from "redux";
import { browserHistory, Link } from "react-router";

class AuthorsListPage extends React.Component {

  redirectToAddAuthorPage = ()=>{
    browserHistory.push('/author/create');
  }

  render() {
    return (
      <div className="AuthorsPage">
        <button 
        className="addAuthor btn btn-primary"
        onClick={this.redirectToAddAuthorPage}>Add New Author</button>

         <ul className="list-group">
          {this.props.authors && this.props.authors.map(author =>
            <li className="list-group-item" key={author.id}>
              <Link to={`/author/${author.id}`}>
                {author.firstName} {author.lastName}
              </Link>
              <span className="pull-right">
                {author.numberOfVideos} Videos
              </span>
            </li>
          )}
        </ul> 
      </div>
    );
  }
}

AuthorsListPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors : state.authors,
    courses : state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsListPage);
