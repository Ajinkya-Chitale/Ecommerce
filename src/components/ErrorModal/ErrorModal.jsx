import './ErrorModal.css'

const ErrorModal = ({show, message, onClose}) => {
    if(!show) {
        return null; // Render nothing if show is false 
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" style={{ color: 'red' }}>An Error Occurred!</h4>
                </div>
                <div className="modal-body">
                <p>{message}</p>
                </div>
                <div className="modal-footer">
                <button onClick={onClose}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal
