import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ img, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={img} alt="" width="350px" />
      <button onClick={onClose}>X</button>
    </ReactModal>
  );
};
