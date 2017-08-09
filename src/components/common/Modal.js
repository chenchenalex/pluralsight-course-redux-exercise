import React, {PropTypes} from 'react';

const Modal = ({id, action, messages}) => {
    return (
        <div className="modal fade" id={id} role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">{messages.title}</h4>
            </div>
            <div className="modal-body">
                <p>{messages.description}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal"
                onClick={action}>{messages.action}</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    );
};

Modal.propTypes = {
    action:PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

export default Modal;