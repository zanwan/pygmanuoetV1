// import React from "react";
import { Carousel } from "react-responsive-carousel";
import { close } from "../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const BookModal = ({ closeModal, book }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-secondary p-6 rounded-lg w-3/4 h-4/4 overflow-auto"
      >
        <button
          type="button"
          className="bg-white float-right inline-flex justify-center rounded-full border border-transparent px-4 py-4 font-light text-black hover:bg-[#C7BEAD] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={close}
            alt="close"
            className="w-[30px] h-[30px] object-contain"
          />
        </button>
        <div className="flex">
          <div className="w-7/12">
            <Carousel>
              {book.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Book cover ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-6/12 pl-4">
            <h2 className="font-notoSerifTC text-3xl font-bold mb-4">
              {book.title}
            </h2>
            <p className="font-notoSerifTC text-lg text-justify">
              {book.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
