import React, { useState } from "react";
import ModalSelf from "./ModalSelf";

function ModalTest() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full my-20 bg-red-400 flex flex-col justify-center">
      <button
        onClick={() => setOpenModal(true)}
        className="bg-white mx-auto py-4 px-4"
      >
        Open Funcking Modal
      </button>
      <ModalSelf open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default ModalTest;
