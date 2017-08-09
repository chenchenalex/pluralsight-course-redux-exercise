import React, { Component, PropTypes} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/authorActions.js";
import { bindActionCreators } from "redux";
import AuthorDetail from "./AuthorDetail";
import toastr from 'toastr';

class ManageAuthorDetail extends Component {
   deleteAuthor = (e) => {

    this.props.actions.deleteAuthor(this.props.author.id)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({error});
        });
  }

  redirect = ()=>{
    toastr.success('Delete author success!');
    this.context.router.push('/authors');
  }

  render() {
    return (
        <AuthorDetail 
          author={this.props.author} 
          courses={this.props.courses}
          onDelete={this.deleteAuthor}
        />
    );
  }
}

function mapStateToProps(state, ownProps) {
    // provide an empty object to prevent undefined data error on child component
    let author = {
        id : '',
        firstName : '',
        lastName : ''
    }, courses = [];

    if(state && state.authors.length > 0 && state.courses.length > 0){
        const id = ownProps.params.id;
        const authorInfo = state.authors.filter(author => author.id === id)[0];

        author = authorInfo ? authorInfo : author ;
        courses = state.courses.filter(course => course.authorId === id);
    }

    // state coming from redux store
  return {
    author,
    courses
  };
}

ManageAuthorDetail.propTypes = {
  author: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorDetail.contextTypes = {
  router: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorDetail);
