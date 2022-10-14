const Modal = ({ body, modalHeader, modalFooter, handleModalClose }) => {
  return (
    <div className="modal-wrapper">
      <div tabIndex="0" className="modal">
        <button className="close-btn" onClick={handleModalClose}>
          Close
        </button>
        <div className="modal-content">
          <div className="modal-header">{modalHeader}</div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">{modalFooter}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
