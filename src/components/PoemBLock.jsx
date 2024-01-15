import React from "react";
import { grow } from "../assets";
import styles from "../style";

export const PoemBLock = () => {
  const sectionStyle = {
    backgroundImage: `url(${grow})`,
  };

  return (
    <div className="relative h-[300px] bg-cover bg-center" style={sectionStyle}>
      <div className="absolute top-20 left-0 right-0 bottom-0 text-center">
        <p className="font-notoSerifTC font-medium text-3xl tracking-wider leading-relaxed">
          我在探索一條航線，傾全力
          <br />
          將歲月顯示在傲岸的額
          <br />
          <span className="text-xl">〈時光命題〉</span>
        </p>
      </div>
    </div>
  );
};
