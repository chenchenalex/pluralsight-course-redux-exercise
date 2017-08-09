import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const AuthorForm = ({author, onChange, onSave, saving}) => {
    return (
    <form>
      <h1>Manage Author</h1>

      <TextInput
        name="firstName"
        label="FirstName"
        value={author.firstName}
        onChange={onChange}/>

      <TextInput
        name="lastName"
        label="LastName"
        value={author.lastName}
        onChange={onChange}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
        
    </form>
    );
};

AuthorForm.propTypes = {
  author: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};


export default AuthorForm;