import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";
import toastr from 'toastr';

class EditAuthorPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, this.props.author),
      saving: false
    };
  }

  updateAuthorState = e => {
    const field = e.target.name;
    let author = this.state.author;
    author[field] = e.target.value;
    this.setState({ author });
  };

  validateForm = e => {
    e.preventDefault();

    const { firstName, lastName } = this.state.author;

    if (!firstName || !lastName ) return;

    this.saveAuthor();
  };

  redirect = () => {
    this.setState({saving: false});
     toastr.success('Author updated');
     this.context.router.push('/authors'); // TODO: what's this?
  }

  saveAuthor = () => {
      
    this.setState({saving: true});
    this.props.actions.saveAuthor(this.state.author)
        .then(data => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({error, saving: false});
        });
  }

  render() {
    return (
        <div>
        <AuthorForm
            author={this.state.author}
            onChange={this.updateAuthorState}
            onSave={this.validateForm}
            saving={this.state.saving}
        />

      </div>
    );
  }
}

EditAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  ajaxCallsInProgress: PropTypes.number
};

EditAuthorPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const authorId = ownProps.params.id;

  if (state.authors.length > 0 && authorId) {
    return {
      author: state.authors.filter(author => author.id === authorId)[0],
      ajaxCallsInProgress: state.ajaxCallsInProgress
    };
  }

  return {author: {}, ajaxCallsInProgress: state.ajaxCallsInProgress};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAuthorPage);
