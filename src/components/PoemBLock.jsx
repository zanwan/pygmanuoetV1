import React from "react";
import { grow } from "../assets";
import styles from "../style";

export const PoemBLock = ({ poem1, poem2, poemTitle }) => {
  const sectionStyle = {
    backgroundImage: `url(${grow})`,
  };

  return (
    <div
      className="relative h-[260px] md:h-[300px] bg-cover bg-center"
      style={sectionStyle}
    >
      <div className="absolute top-20 md:top-22 left-0 right-0 bottom-0 text-center">
        <div className="inline-block font-notoSerifTC font-medium text-xl md:text-3xl tracking-wider leading-loose text-gray-700">
          {poem1}
          <br />
          <div className="mt-1 leading-3 md:leading-10">{poem2}</div>
          <br />
          <div className="text-sm md:text-xl leading-3">{poemTitle}</div>
        </div>
      </div>
    </div>
  );
};
