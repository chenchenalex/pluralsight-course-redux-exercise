import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/authorActions.js";
import { bindActionCreators } from "redux";
import {browserHistory, Link} from 'react-router';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      authors: []
    };

  }

  componentWillReceiveProps(nextProps) {
    const {authors, courses} = nextProps;

    if (authors.length !== this.props.authors.length) {
      this.setState((prevState, props)=>({
          authors
      }));
    }
    //         debugger;

    // if(courses.length > 0 && authors.length > 0){
    //     this.state.authors.forEach((author)=>{
    //         const authorId = author.id;

    //         let numberOfVideos = this.state.courses.filter((course)=>course.authorId === authorId).length;

    //         author.numberOfVideos = numberOfVideos;

    //         this.setState((prevState, props) => ({
    //             authors: Object.assign({}, prevState, author)
    //         }));
    //     });

    // }
  }

  render() {
    return (
      <div className="AuthorsPage">
        <ul className="list-group">
          {this.props.authors.map(author =>
            <li className="list-group-item" key={author.id}>
                <Link to={`/author/${author.id}`}>
                    {author.firstName} {author.lastName}
                </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // state coming from redux store

  return {
    authors: state.authors,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
