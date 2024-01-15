import { product } from "../constants";
import { ProductOpen, poemquote2, grass, cloud } from "../assets";

const ProductFeature = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row py-6 justify-end items-center">
      <div className="w-full md:w-5/12 flex-row items-center">
        <div className="flex-col pr-4">
          <div className="relative">
            <img src={cloud} className="absolute right-24 top-0 h-[60px]"></img>
            <p className="font-notoSerifTC mt-[-180px] text-xl font-normal text-black ml-2 text-center tracking-wide subpixel-antialiased leading-loose mb-10">
              {product[0].content.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div className="relative">
            <img
              src={grass}
              className="absolute left-24 bottom-[-150px]  h-[100px]"
            ></img>
            <div className="h-[180px]">
              <p className="absolute right-0 left-0 top-1 font-notoSerifTC mt-10 text-2xl  text-black ml-2 text-center tracking-wider	font-semibold leading-relaxed">
                來吧來吧，來到安答路西亞
                <br />
                找我找我在遙遠的格拉拿達
                <br />
                讓我們讚美無窮的格拉拿達
                <br /> 一首新歌唱老了安答路西亞
                <br /> 〈喇嘛轉世〉
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={ProductOpen}
        alt="hero"
        className="w-full mt-[-2rem] ml-[-8px] md:ml-0 md:w-7/12 md:pl-0 md:pr-0 md:mr-0"
        loading="lazy"
      />
    </div>
  );
};

export default ProductFeature;
