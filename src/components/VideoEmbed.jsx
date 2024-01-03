import React from "react";
import { close } from "../assets";

export const VideoEmbed = ({ closeModal, videoUrl }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center cursor-pointer"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <div
        className="relative bg-[#eae5db00] p-6 overflow-y-auto mt-[10px] h-[90vh] cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <h2 className="text-2xl font-bold mb-4">YouTube Video</h2> */}

        <iframe
          style={{ width: "100%", height: "100%", aspectRatio: "16/9" }}
          src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

        <button
          type="button"
          className="bg-primary absolute top-0 right-0 inline-flex justify-center rounded-full border border-transparent px-4 py-4 font-light text-black hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          <img
            src={close}
            alt="close"
            className="w-[32px] h-[32px] object-contain"
          />
        </button>

        {/* <button 
          type="button" 
          className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          關閉
        </button> */}
      </div>
    </div>
  );
};

export default VideoEmbed;
