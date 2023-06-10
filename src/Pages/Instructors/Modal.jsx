

const Modal = ({ isOpen, onClose,data }) => {
  return (
    // Your modal content here
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {/* Modal content goes here */}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
