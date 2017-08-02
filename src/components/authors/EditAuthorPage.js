import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';

class EditAuthorPage extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            author : Object.assign({}, this.props.author)
        };
    }

    updateAuthorState = (e) => {
        const field = e.target.name;
        let author = this.state.author;
        author[field] = e.target.value;
        this.setState({author});
    }

    saveAuthor = (e) => {
        e.preventDefault();

        this.props.actions.saveAuthor(this.state.author);
    }

    render(){
        return (
            <AuthorForm 
            author={this.props.author} 
            onChange = {this.updateAuthorState}
            onSave = {this.saveAuthor}
            />
        );
    }

}

EditAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps){
    const authorId = ownProps.params.id;

    if(state && state.authors){
        return {
            author: authorId ? state.authors.filter(author => author.id === authorId) : {}
        };
    }
}

function mapDispatchToProps (dispatch){
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAuthorPage);