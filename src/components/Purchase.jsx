import React from "react";

import { Button } from "./index";

import { YangMuTitle, AllBooks } from "../assets";

const Purchase = () => {
  return (
    <div className="w-full flex justify-center mb-20 md:mb-0 md:mt-14">
      <div className="flex flex-col">
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
        <div
          className="font-notoSerifTC text-2xl mt-8 tracking-wider text-center"
          style={{ color: "#876625" }}
        >
          2月2日起首波珍藏預購79折
        </div>
      </div>
    </div>
  );
};

export default Purchase;
