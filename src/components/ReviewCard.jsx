import React, { useState } from "react";

import { Avatar1 } from "../assets";

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
        setIsOpen(true);
        openModal();
      }}
    >
      <div className="md:hidden flex flex-row justify-end pr-8 pt-4">
        <button
          className="font-notoSerifTC font-medium text-base text-right no-underline bg-white px-6 py-1 rounded-md hover:bg-secondary hover:text-black transition duration-300 ease-in-out"
          // onClick={() => {
          //   setIsOpen(true);
          //   openModal();
          // }}
        >
          閱讀更多
        </button>
      </div>

      <div className="ml-3">
        <p className="py-2 text-center font-notoSerifTC font-bold text-xl tracking-wide subpixel-antialiased">
          {reviews.header}
        </p>
      </div>
      {/* <p className="px-8 pt-2 font-notoSerifTC font-normal text-base text-justify tracking-wide subpixel-antialiased">
        {reviews.content}
      </p> */}

      {/* 名條 */}
      <div className="flex flex-row w-[125px] items-center pl-2 py-4">
        <img
          className="w-[42px] h-[42px] object-contain rounded-full"
          src={reviews.avatar}
          alt="teacher1"
          loading="lazy"
        />
        <div className="flex flex-col mx-2">
          <div className="font-notoSerifTC text-md font-medium">
            {reviews.name}
          </div>
          {/* {reviews.nameCard && (
            <div className="font-notoSerifTC font-normal text-xs">
              {reviews.nameCard.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          )} */}
        </div>
      </div>

      {isOpen && (
        <ReviewPost
          closeModal={() => {
            setIsOpen(false);
            closeModal();
          }}
          article={reviews}
          articleBgColor={bgColor}
        />
      )}
    </div>
  );
};

export default ReviewCard;
