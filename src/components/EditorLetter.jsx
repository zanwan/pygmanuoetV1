import { editorsLetter, Avatar7, editorNamebg } from "../assets";
import React, { useState } from "react";

import ReviewPost from "./ReviewPost";

const EditorLetter = ({ reviews, bgColor }) => {
  const sectionStyle = {
    backgroundImage: `url(${editorsLetter})`,
  };

  const namebg = {
    backgroundImage: `url(${editorNamebg})`,
  };

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
    <div className="flex flex-col justify-center">
      <div
        className="relative w-9/12 h-[800px] bg-cover bg-center mx-auto"
        style={sectionStyle}
      >
        <div className="absolute top-[-42px] left-0 right-0 mx-auto">
          <div className="flex flex-col mx-auto justify-center">
            <img
              className=" w-[90px] h-[90px] object-contain rounded-full mx-auto"
              src={Avatar7}
              alt="teacher1"
              loading="lazy"
            />
            <div className="px-4 py-2 w-[120px] text-center mx-auto text-2xl font-notoSerifTC font-medium">
              葉步榮
            </div>
          </div>
        </div>

        <div className="w-[550px] mx-auto absolute top-20 left-0 right-0 bottom-0 text-center">
          <div className="font-notoSerifTC font-bold text-4xl mb-8 mt-10">
            有人在早晨遞給我一首詩
          </div>
          <p className="h-[650px] indent-8 text-wrap text-justify font-notoSerifTC font-regular text-lg tracking-wider leading-relaxed">
            我沒問過楊牧的筆名，他早年 日語，楊與葉同音；楊先生，ya
            sam，我猜葉珊從楊桑來的。
            <br />
            <br />
            葉珊筆名，高一才開始；我們高中同班，另有一個葉同學，我們三個滿要好的，很好高興，三個人都姓葉。
            後來我在編楊牧書簡，發現一封信，1969年，葉珊寫了一封信給瘂弦，他寫得短，說他要改筆名，改成楊葉珊，冠了個楊字；那封信很短，有改了很多字，我覺他有點情緒化。
            <br />
            <br />
            後來他再寫信給瘂弦，署名仍是葉珊
            <br />
            <br />
            楊牧每天一大早，跑去看報紙，有沒有登出來，所以他常鼓勵年輕人投稿，因為他自己從小有投稿的緊張興奮的成就感。
            主編校刊，刊頭《怒濤》，把學校嚇壞了，教官跑來說你年紀輕輕有什麼好怒，怕我們與左派的呼應，
            發行一期就停掉了，很有趣。
            <br />
            <br />
            我與楊牧在學校都不太用功，對數學理化無法進入狀況。奇來前寫寫被數學老師罵，上海富態的老師，每天都穿旗袍，
            楊牧背不出數學公式，楊牧覺得她罵得很好聽；說老師罵他糊理糊塗，迷迷糊糊，用上海話罵；後來有次他自己罵自己這兩句，罵出來。
            他到高中，數學仍不好
            <br />
            <br />
          </p>
        </div>
      </div>

      {reviews.fullReview && (
        <div className="flex flex-row justify-center mt-8 pt-2 mx-auto">
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

export default EditorLetter;
