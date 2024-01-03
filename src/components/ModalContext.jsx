import React from "react";

const ModalContext = React.createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export default ModalContext;
