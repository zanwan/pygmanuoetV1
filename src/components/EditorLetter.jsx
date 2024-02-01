import { editorsLetter, Avatar7, editorNamebg } from "../assets";
import React, { useState } from "react";

import EditorReviewPost from "./EditorReviewPost";

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
        className="relative w-full mt-[-32px] md:mt-0 md:w-9/12 bg-cover bg-center mx-auto"
        style={sectionStyle}
      >
        <div className="absolute md:top-[-42px] left-0 right-0 mx-auto">
          <div className="flex flex-col mx-auto justify-center">
            <img
              className=" w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-contain rounded-full mx-auto"
              src={Avatar7}
              alt="葉步榮"
              loading="lazy"
            />
            <div className="px-4 py-2 w-[120px] text-center mx-auto text-2xl font-notoSerifTC font-medium">
              葉步榮
            </div>
          </div>
        </div>

        <div className="w-full md:w-[550px] mx-auto px-4 md:px-0 text-center flex flex-col justify-center mt-12 md:mt-8">
          <div className="font-notoSerifTC font-bold text-2xl md:text-4xl mb-8 mt-16"></div>
          <div className="text-wrap text-justify font-notoSerifTC font-regular text-md md:text-lg tracking-wider leading-relaxed px-4 md:px-0">
            <p className="indent-[36px]">
              楊牧的文學很寬廣，詩、散文、戲劇、翻譯、學術論著，大概只有小說沒寫，但我個人覺得他的《年輪》、《星圖》、《奇萊前後書》其實就是小說。這套全集希望按照楊牧的編輯理念來做，因為他做編輯的時間，比我更長更久，對編輯的經驗很豐富，又很龜毛，意見很多。
            </p>
            <br />

            <p className="indent-[36px]">
              全集三十冊中，四冊內文是依洪範原版付梓，其他二十六冊都重新排印。新製的內容，除了兩本英文著作和論文的全新漢譯之外，主要就是別卷裡的八冊（集外集、書信、楊牧手筆的洪範書介等）。楊牧向來是以文字閱讀為重，版面力求樸素。他不喜歡文章旁邊有編輯寫案語，說這篇文章如何如何。如果一定要有編案，他也說愈簡單愈好，以免強解作者之意。
            </p>
            <br />

            <p className="indent-[36px]">
              文學作品具有多義性，再好的評論家有時也無法評論得很周詳，總會限制住讀者的看法。楊牧自己出書，後來再版，也都把別人的序跋統統拿掉，封底摺口的書目廣告也刪；2006年之後的詩集連書介都不要了，空白。他有潔癖，是處女座。
            </p>
            <br />

            <p className="indent-[36px]">
              楊牧寫作，完全不理市場口味這一回事。這次別卷裡的書信，有一篇他寫給郭松棻的信，裡面就寫說，他不知道要怎麼去跟讀者打成一片，他認為作者是要跑在讀者前面，不讓讀者輕易追上，他沒辦法去跟讀者隨和。講起來他是很高傲的那種，但我認為，這才是一種文學創作的境界。
            </p>
            <br />
          </div>
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
        </div>
      </div>

      {isOpen && (
        <EditorReviewPost
          closeModal={() => {
            setIsOpen(false);
            closeModal();
          }}
          article={reviews}
        />
      )}
    </div>
  );
};

export default EditorLetter;
