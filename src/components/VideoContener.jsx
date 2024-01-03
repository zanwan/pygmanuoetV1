import { useState } from "react";
import { VideoEmbed } from "./VideoEmbed";

export const VideoContener = (img, url) => {
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
    <>
      <img
        src={img}
        alt="poemTub-1"
        className="rounded-md grayscale hover:grayscale-0"
        loading="lazy"
        onClick={openModal}
      />
      {isModalOpen && <VideoEmbed closeModal={closeModal} videoUrl={url} />}
    </>
  );
};
