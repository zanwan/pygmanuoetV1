import react, { useState } from "react";
import { ReviewCard, ReviewPost } from "./index";
import { reviewNote1, reviewNote2, reviewNote3 } from "../assets/index";

import { reviews } from "../constants/index";

export const ReviewquoteGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState("");

  const openModal = (data) => {
    setIsModalOpen(true);
    setReviewData(data);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-2">
        <div onClick={() => openModal(reviews[0])}>
          <ReviewCard reviews={reviews[0]} bgStyle={reviewNote1} />
        </div>
        <div onClick={() => openModal(reviews[1])}>
          <ReviewCard reviews={reviews[1]} bgStyle={reviewNote2} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-2 mt-4">
        <div onClick={() => openModal(reviews[2])}>
          <ReviewCard reviews={reviews[2]} bgStyle={reviewNote3} />
        </div>
        <div onClick={() => openModal(reviews[3])}>
          <ReviewCard reviews={reviews[3]} bgStyle={reviewNote1} />
        </div>
        <div onClick={() => openModal(reviews[4])}>
          <ReviewCard reviews={reviews[4]} bgStyle={reviewNote2} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-2 mt-4">
        <div onClick={() => openModal(reviews[5])}>
          <ReviewCard reviews={reviews[5]} bgStyle={reviewNote3} />
        </div>
        <div onClick={() => openModal(reviews[6])}>
          <ReviewCard reviews={reviews[6]} bgStyle={reviewNote1} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-2 mt-4">
        <div onClick={() => openModal(reviews[7])}>
          <ReviewCard reviews={reviews[7]} bgStyle={reviewNote3} />
        </div>
        <div onClick={() => openModal(reviews[9])}>
          <ReviewCard reviews={reviews[9]} bgStyle={reviewNote3} />
        </div>
      </div>

      {isModalOpen && (
        <ReviewPost
          closeModal={() => {
            setIsModalOpen(false);
            closeModal();
          }}
          article={reviewData}
        />
      )}
    </>
  );
};

export default ReviewquoteGroup;
