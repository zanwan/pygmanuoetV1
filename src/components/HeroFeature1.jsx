import { Button } from "./index";
import { features } from "../constants";

import {
  AllBooks,
  YangMuTitle,
  subtitleCenter,
  subtitleLeft,
} from "../assets/index";

const HeroFeature1 = () => {
  /* 首圖與簡介 */
  return (
    <>
      {/* 網頁版 */}
      <div className="w-full flex flex-col mt-[60px] md:mt-0 md:flex md:flex-row md:py-6 md:justify-between md:items-center">
        <img
          src={features[0].img}
          alt="poemTub-1"
          className=" md:hidden my-6 object-cover mx-auto"
          loading="lazy"
        />

        <div className="w-full mt-[1rem] md:mt-[4rem] md:w-5/12 md:flex-row items-center">
          <div className="md:flex-col md:pr-2">
            <div className="w-full md:w-[420px] mx-auto px-4 md:px-0">
              <img
                src={YangMuTitle}
                className="object-contain w-[250px] mx-auto md:mx-0 "
                alt="楊牧全集"
              ></img>

              <div className="w-full md:w-[480px] font-notoSerifTC text-center md:text-justify text-md tracking-wider leading-6  md:ml-4">
                <img
                  src={subtitleLeft}
                  alt="poemTub-1"
                  className="hidden md:block w-[90%] my-6 object-cover"
                  loading="lazy"
                />
                <img
                  src={subtitleCenter}
                  alt="poemTub-1"
                  className="md:hidden w-[90%] my-6 object-cover mx-auto"
                  loading="lazy"
                />
                <br />
                若將文學視為一座大山，
                <br />
                這條時而使人喜悅，時而使人困頓的路途中，
                <br />
                楊牧的著作提供無數條蹊徑，指引人們通往永恆的絕景。
                <br />
                <br />
                《楊牧全集》三十冊巨著，獻給讀者、創作者、研究者：
                <br />
                無論是東方的、西方的、古典的、現代的、人文的、
                <br />
                自然的、學思的、藝術的⋯⋯
                <br />
                讓我們按圖索驥，在無盡的蒼穹下，仰望楊牧創作的美麗星辰。
              </div>
            </div>
          </div>
        </div>

        <img
          src={features[0].img}
          alt="hero"
          className="z-0 hidden md:block md:w-7/12 md:h-1/2 md:pl-2 md:pr-0 md:mr-0 "
          loading="lazy"
        />
      </div>
    </>
  );
};

export default HeroFeature1;
