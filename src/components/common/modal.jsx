const Modal = ({ body, modalHeader, modalFooter, handleModalClose }) => {
  return (
    <div className="modal-wrapper">
      <div tabIndex="0" className="modal">
        <button className="btn close-btn" onClick={handleModalClose}>
          Close
        </button>
        <div className="modal-content">
          <div className="modal-header">
            <h1>{modalHeader}</h1>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">{modalFooter}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
