import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/authorActions.js";
import { bindActionCreators } from "redux";
import AuthorDetail from "./AuthorDetail";

class ManageAuthorPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        authors: []
    };
  }

  render() {
    return (
      <div className="manage-author-container">
        {<AuthorDetail author={this.props.author}/>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    // provide an empty object to prevent undefined data error on child component
    let author = {
        id : '',
        firstName : '',
        lastName : ''
    };

    if(state && state.authors.length > 0){
        author = state.authors.filter(author => author.id === ownProps.params.id)[0];
    }

  // state coming from redux store
  return {
    author,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
