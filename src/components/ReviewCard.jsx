import React, { useState } from "react";

import { Avatar1 } from "../assets";

import ReviewPost from "./ReviewPost";

const ReviewCard = ({ reviews, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div
      className="w-full flex flex-col justify-between border-black border-[1px] border-solid"
      style={{ backgroundColor: bgColor }}
    >
      <p className="px-8 pt-6 font-notoSerifTC font-semibold text-3xl tracking-wide subpixel-antialiased">
        {reviews.header}
      </p>
      <p className="px-8 pt-2 font-notoSerifTC font-normal text-base text-justify tracking-wide subpixel-antialiased">
        {reviews.content}
      </p>

      {reviews.fullReview && (
        <div className="flex flex-row justify-end pr-8 pt-4">
          <button
            className="font-notoSerifTC font-medium text-base text-right no-underline bg-white px-6 py-1 rounded-md hover:bg-secondary hover:text-black transition duration-300 ease-in-out"
            onClick={() => {
              setIsOpen(true);
              openModal();
            }}
          >
            閱讀更多
          </button>
        </div>
      )}

      {/* 名條 */}
      <div className="flex justify-stretch w-full items-center bg-secondary px-8 mt-4 py-4">
        <img
          className="w-[50px] h-[50px] object-contain rounded-full"
          src={reviews.avatar}
          alt="teacher1"
          loading="lazy"
        />
        <div className="flex flex-col ml-4">
          <div className="font-notoSerifTC text-base font-medium">
            {reviews.name}
          </div>
          {reviews.nameCard && (
            <div className="font-notoSerifTC font-normal text-xs">
              {reviews.nameCard.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          )}
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
