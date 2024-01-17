import { features } from "../constants";
import { poemquote1, boat, toungPoem, YangMuTitle } from "../assets";

const HeroFeature1 = () => {
  const sectionStyle = {
    backgroundImage: `url(${poemquote1})`,
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:py-6 justify-start item-center md:items-start">
      <img
        src={features[1].img}
        alt="hero"
        className="w-full mt-[-2rem] md:mt-[2rem] md:w-7/12 md:h-1/2 md:pl-0"
        loading="lazy"
      />

      <div className="w-full md:w-full flex-row items-center">
        <div className="flex-col mt-8 md:pr-8 md:ml-[20px]">
          <div className="w-full mx-auto md:mx-0 flex justify-center md:justify-start">
            <img
              src={YangMuTitle}
              className="object-cover w-[250px] ml-2 "
              alt="楊牧全集"
            ></img>
          </div>

          <div className="relative">
            {/* <img
              src={toungPoem}
              className="hidden md:block absolute left-2 md:left-0 top-6 h-[50px]"
            ></img> */}
            <div className="h-[180px]">
              <p className="absolute left-0 right-0 md:left-6 top-1 font-notoSerifTC mt-6 text-md md:text-xl font-normal text-black ml-2 text-center md:text-left tracking-wider leading-relaxed ">
                ▪ 三十冊跨文類大全集
                <br />
                ▪ 文學界權威校編舊作新篇
                <br />
                ▪ 私密書信、手稿、相片首度公開
                <br />
                ▪ 最靠近諾貝爾文學獎的台灣作家思想精華
                <br />▪ 巔峰巨著正式問世，閱讀攻頂之路，就此展開！
                {/* {features[1].content.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))} */}
              </p>
            </div>
          </div>

          <div className=" mt-10 md:mt-20">
            <div
              className="relative h-[250px] md:h-[300px] bg-cover bg-center max-w-[400px] md:max-w-[500px] mx-auto"
              style={sectionStyle}
            >
              <div className="absolute top-14 left-0 right-0 bottom-0 text-center">
                <p className="font-notoSerifTC font-semibold text-2xl tracking-wider leading-relaxed">
                  這時日落的方向是西
                  <br />
                  越過眼前的柏樹。潮水
                  <br />
                  此岸。但知每一片波浪
                  <br />
                  都從花蓮開始——
                  <br />
                  <span className="text-xl">〈瓶中稿〉</span>
                </p>
              </div>
              <img
                src={boat}
                className="absolute right-4 bottom-[-35px] md:right-0 md:bottom-0 h-[60px] md:h-[90px]"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeature1;
