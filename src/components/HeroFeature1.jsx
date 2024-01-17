import { Button } from "./index";
import { features } from "../constants";

import { AllBooks, YangMuTitle } from "../assets/index";

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
                className="object-contain w-[250px] mx-auto md:mx-0"
                alt="楊牧全集"
              ></img>

              <div className="w-full md:w-[480px] font-notoSerifTC text-center md:text-justify text-md tracking-wider leading-6 text-nowrap md:ml-4">
                <h3 className=" text-xl md:text-2xl font-medium mt-6">
                  獻給所有文學人的解答之書
                </h3>
                <span className="text-lg font-medium">
                  集結楊牧六十年豐厚創作，人生與詩藝的唯一嚮導
                </span>
                <br />
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
            {/* <p className="font-notoSerifTC mt-8 md:mt-14 text-xl font-normal text-black md:ml-2 text-center tracking-wider leading-loose">
              {features[0].content.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p> */}

            {/* <div className="mt-16">
              <Button />
            </div> */}
          </div>
        </div>

        <img
          src={features[0].img}
          alt="hero"
          className="hidden md:block md:w-7/12 md:h-1/2 md:pl-2 md:pr-0 md:mr-0"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default HeroFeature1;
