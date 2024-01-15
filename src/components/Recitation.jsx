import { useState } from "react";
import { poemTub1, poemTub2, poemTub3, poemTub4 } from "../assets";
import VideoEmbed from "./VideoEmbed";

const Recitation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setIsModalOpen(true);
    setVideoUrl(url);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="flex-col content-center justify-center">
        <p className="text-center text-black font-notoSerifTC text-lg md:text-2xl mt-[-40px] md:mx-40 leading-loose tracking-widest">
          目宿媒體製作出品
          <br />
          《我們在島嶼朗讀》系列短片
          <br />
          邀請作家親聲朗讀
          <br />
          聽見文學的聲音，重溫閱讀的感動
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center w-full mt-10">
          <div
            className="cursor-pointer"
            onClick={() => openModal("3qT0CdJTrwc")}
          >
            <img
              src={poemTub1}
              alt="poemTub-2"
              className="rounded-md grayscale hover:grayscale-0"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => openModal("tSWJitodNSY")}
          >
            <img
              src={poemTub2}
              alt="poemTub-2"
              className="rounded-md grayscale hover:grayscale-0"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => openModal("s3kC2Cl5zS4")}
          >
            <img
              src={poemTub3}
              alt="poemTub-3"
              className="rounded-md grayscale hover:grayscale-0"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => openModal("7fiqKd55fzM")}
          >
            <img
              src={poemTub4}
              alt="poemTub-4"
              className="rounded-md grayscale hover:grayscale-0"
            />
          </div>

          {isModalOpen && (
            <VideoEmbed closeModal={closeModal} videoUrl={videoUrl} />
          )}
        </div>
      </div>
    </>
  );
};

export default Recitation;
