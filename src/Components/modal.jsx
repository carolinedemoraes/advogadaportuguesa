import React from "react";
import "../styles/Components/modal.sass";

import { Children } from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (isOpen) {
    return (
      <div className="modal">
        <div className="modal-style">{children}</div>

        <button className="modal-closed" onClick={onClose}>
          X
        </button>
      </div>
    );
  }
  return null;
}
