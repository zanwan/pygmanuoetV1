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
        className="bg-secondary p-6 w-full md:w-3/4 h-3/4 md:h-4/4 overflow-auto"
      >
        <button
          type="button"
          className="hidden bg-white float-right sm:inline-flex justify-center rounded-full border border-transparent px-2 md:px-4 py-2 md:py-4 font-light text-black hover:bg-[#C7BEAD] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={close}
            alt="close"
            className="w-[18px] h-[18px] md:w-[30px] md:h-[30px] object-contain"
          />
        </button>

        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-5/12 md:w-7/12">
            <Carousel>
              {book.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Book cover ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-full md:w-6/12 pl-4">
            <h2 className="font-notoSerifTC text-3xl font-bold mb-4">
              {book.title}
            </h2>
            <p className="font-notoSerifTC text-md md:text-lg text-justify">
              {book.content}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex w-full mt-4 bg-white float-right md:hidden justify-center border border-transparent px-2 md:px-4 py-2 md:py-4  text-black font-notoSerifTC font-medium hover:bg-[#C7BEAD] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm cursor-pointer"
          onClick={closeModal}
        >
          關閉
        </button>
      </div>
    </div>
  );
};

export default BookModal;
