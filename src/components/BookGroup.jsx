import React, { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "./BookModal.jsx";
import { product } from "../constants/index.js";

function BookGroup() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [bookData, setBookdata] = useState("");

  const openBookModal = (data) => {
    setIsBookOpen(true);
    setBookdata(data);
    document.body.style.overflow = "hidden";
  };

  const closeBookModal = () => {
    setIsBookOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly w-full">
        <div onClick={() => openBookModal(product[1])}>
          <BookCard product={product[1]} height={200} />
        </div>
        <div onClick={() => openBookModal(product[2])}>
          <BookCard product={product[2]} height={200} />
        </div>
        <div onClick={() => openBookModal(product[3])}>
          <BookCard product={product[3]} height={200} />
        </div>
        <div onClick={() => openBookModal(product[4])}>
          <BookCard product={product[4]} height={150} />
        </div>
        <div onClick={() => openBookModal(product[5])}>
          <BookCard product={product[5]} height={150} />
        </div>
      </div>
      {isBookOpen && <BookModal closeModal={closeBookModal} book={bookData} />}
    </>
  );
}

export default BookGroup;
