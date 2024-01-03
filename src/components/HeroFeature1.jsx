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
          className=" md:hidden my-6 object-cover mx-auto"
          loading="lazy"
        />

        <div className="w-full mt-[2rem] md:mt-[4rem] md:w-1/3 md:flex-row items-center">
          <div className="md:flex-col md:pr-4 mx-auto">
            <h2 className="font-notoSerifTC text-6xl font-bold text-black md:ml-2 text-center">
              {features[0].title}
            </h2>
            <p className="font-notoSerifTC mt-8 md:mt-14 text-xl font-normal text-black md:ml-2 text-center tracking-wider leading-loose">
              {features[0].content.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <div className="mt-16">
              <Button />
            </div>
          </div>
        </div>

        <img
          src={features[0].img}
          alt="hero"
          className="hidden md:block md:w-2/3 md:h-1/2 md:pl-4 md:pr-0 md:mr-0"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default HeroFeature1;
