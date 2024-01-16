import { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "./BookModal.jsx";
import { product } from "../constants/index.js";

const BookGroup = () => {
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
        <BookCard
          onClick={() => openBookModal(product[1])}
          product={product[1]}
          height={200}
        />
        <BookCard
          onClick={() => openBookModal(product[2])}
          product={product[2]}
          height={200}
        />
        <BookCard
          onClick={() => openBookModal(product[3])}
          product={product[3]}
          height={200}
        />
        <BookCard
          onClick={() => openBookModal(product[3])}
          product={product[4]}
          height={150}
        />
        <BookCard
          onClick={() => openBookModal(product[4])}
          product={product[5]}
          height={150}
        />

        {isBookOpen && (
          <BookModal closeModal={closeBookModal} book={bookData} />
        )}
      </div>
    </>
  );
};

export default BookGroup;
