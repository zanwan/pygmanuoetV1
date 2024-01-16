import React from "react";

import { Button } from "./index";

import { YangMuTitle } from "../assets";

const Purchase = () => {
  return (
    <div className="flex justify-center mt-[-60px] mb-20 md:mb-0 md:mt-14">
      <div className="flex-col">
        <img
          src={YangMuTitle}
          className="w-[200px] md:w-[300px] mx-auto"
          alt="楊牧全集標準字"
        />
        <p className="text-lg font-notoSerifTC text-center my-2">
          2024 年 3 月 13 日 <br />
          楊牧逝世四周年出版
        </p>

        <Button />
      </div>
    </div>
  );
};

export default Purchase;
