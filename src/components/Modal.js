const Modal = ({ onClose, book }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default Modal;
