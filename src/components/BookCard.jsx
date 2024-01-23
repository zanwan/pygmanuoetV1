// import { BookSet1, } from "../assets";
import React, { useState } from "react";
import BookModal from "./BookModal";

const BookCard = ({ product, height }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div
      className="md:h-[380px] w-full"
      onClick={() => {
        openModal();
      }}
    >
      <div className="hover:brightness-110 hover:text-yellow-800 transition duration-500 ease-in-out cursor-pointer">
        <img
          src={product.images[0]}
          alt=""
          className="object-contain h-[400px] md:h-[250px] mx-auto mt-4 md:mt-8 "
        />
        <div className="flex flex-col justify-between items-center mt-[-20px]">
          <div className="mx-8 mt-2 mb-4 md:my-8">
            <p className="font-notoSerifTC font-semibold text-2xl text-center">
              {product.title}
            </p>
          </div>
        </div>
      </div>

      {/* {isModalOpen && <BookModal closeModal={closeModal} book={product} />} */}
    </div>
  );
};

export default BookCard;
