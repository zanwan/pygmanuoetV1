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
      <div className="relative flex justify-center py-4 px-2 md:px-6 ">
        <button
          type="button"
          className=" bg-white md:bg-primary z-20 absolute top-[60px] md:top-4 right-[30px] md:right-0 inline-flex justify-center rounded-full border border-transparent px-2 py-2 md:px-4 md:py-4 font-light text-black hover:bg-[#C7BEAD] sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          <img
            src={close}
            alt="close"
            className="w-[32px] h-[32px] object-contain"
          />
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-secondary pt-[10vh] pb-[10vh] max-w-6xl w-full overflow-y-auto h-[90vh] md:h-[80vh] mt-8 px-8 md:px-16"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="w-[50vw] sm:w-5/12 md:w-5/12 mx-auto">
              <Carousel
                autoPlay={true}
                emulateTouch={true}
                interval={1500}
                width={"90%"}
              >
                {book.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Book cover ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="w-full md:w-7/12 pl-8">
              <h2 className="font-notoSerifTC text-3xl font-bold mb-4">
                {book.title}
              </h2>
              <p className="font-notoSerifTC text-md md:text-lg text-justify">
                {book.content}
              </p>
            </div>
          </div>
          <div className="flex justify-center text-center mt-[-20px] md:mt-[-40px]">
            <button
              type="button"
              className="mt-12 rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-[#C7BEAD]"
              onClick={closeModal}
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
