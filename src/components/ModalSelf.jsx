import React from "react";

const ModalSelf = (open, onClose) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="fixed w-full h-full ">
      <div className="fixed max-w-lg w-full top-[40%] left-[50%] flex  bg-primary">
        show
      </div>
    </div>
  );
};

export default ModalSelf;
