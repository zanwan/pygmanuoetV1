import React, { useState } from "react";

import { eye } from "../assets";

import ReviewPost from "./ReviewPost";

const ReviewCard = ({ reviews, bgColor, bgStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const bgsvg = {
    backgroundImage: `url(${bgStyle})`,
  };

  return (
    <div
      className="w-full flex flex-row-reverse justify-end items-center cursor-pointer bg-cover bg-center hover:bg-secondary hover:text-yellow-700 transition duration-300 ease-in-out"
      style={bgsvg}
      onClick={() => {
        openModal();
      }}
    >
      <div className="md:hidden flex flex-row justify-center align-middle  mx-auto">
        <img
          src={eye}
          className="w-[20px] h-[20px]"
          onClick={() => {
            setIsOpen(true);
            openModal();
          }}
        ></img>
      </div>

      <div className="ml-3 w-[220px] sm:w-4/6 md:w-4/6">
        <p className="py-2 text-center md:text-left font-notoSerifTC font-bold text-xl md:text-[18px] tracking-wide subpixel-antialiased">
          {reviews.header}
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-[60px] sm:w-[100px] md:w-[125px] items-center md:pl-2 py-4">
        <img
          className="w-[42px] h-[42px] object-contain rounded-full"
          src={reviews.avatar}
          alt="teacher1"
          loading="lazy"
        />
        <div className="flex flex-col mx-2">
          <div className="font-notoSerifTC text-sm md:text-md font-medium">
            {reviews.name}
          </div>
        </div>
      </div>

      {isOpen && (
        <ReviewPost
          closeModal={closeModal}
          article={reviews}
          articleBgColor={bgColor}
        />
      )}
    </div>
  );
};

export default ReviewCard;
