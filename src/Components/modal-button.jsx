import React from "react";
import { useState } from "react";
import Modal from "./closemodal";
import "../styles/Components/modal-button.sass";

const ModalButton = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button className="modal-btn" onClick={() => setOpenModal(true)}>
        Saiba mais!
      </button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalButton;
