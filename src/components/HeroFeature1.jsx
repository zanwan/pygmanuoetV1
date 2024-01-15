import { Button } from "./index";
import { features } from "../constants";

import { AllBooks } from "../assets/index";

const HeroFeature1 = () => {
  /* 首圖與簡介 */
  return (
    <>
      {/* 網頁版 */}
      <div className="w-full flex flex-col md:flex md:flex-row md:py-6 md:justify-between md:items-center">
        <img
          src={AllBooks}
          alt="poemTub-1"
          className="md:hidden my-6 object-cover mx-auto"
          loading="lazy"
        />

        <div className="w-full mt-[2rem] md:mt-[4rem] md:w-5/12 md:flex-row items-center">
          <div className="md:flex-col md:pr-2">
            <div className=" w-[420px] mx-auto">
              <h2 className="font-[ChenYuluoyan] text-8xl text-black text-center md:text-left">
                {features[0].title}
              </h2>
              <div className="font-notoSerifTC text-justify text-md tracking-wider leading-6 ">
                <h3 className=" text-2xl font-medium">
                  獻給所有文學人的解答之書
                </h3>
                <br />
                集結楊牧六十年豐厚創作，人生與詩藝的唯一嚮導
                <br />
                <br />
                若將文學視為一座大山，這條時而使人喜悅，時而使人困頓的路途中，
                楊牧的著作提供無數條蹊徑，指引人們通往永恆的絕景。
                <br />
                <br />
                《楊牧全集》三十冊巨著，獻給讀者、創作者、研究者
                <br />
                無論是東方的、西方的、古典的、現代的、人文的、自然的、學思的、藝術的⋯⋯
                讓我們按圖索驥，在無盡的蒼穹下，仰望楊牧創作的美麗星辰。
                <div
                  className="font-notoSerifTC text-2xl mt-8 tracking-wider"
                  style={{ color: "#876625" }}
                >
                  ———首波珍藏預購79折
                </div>
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
