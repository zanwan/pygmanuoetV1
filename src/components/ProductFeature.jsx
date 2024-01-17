import { product } from "../constants";
import { ProductOpen, poemquote2, grass, cloud } from "../assets";

const ProductFeature = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <p className="font-notoSerifTC text-md md:text-xl font-normal text-black ml-2 text-center tracking-wide subpixel-antialiased leading-loose mb-4">
        {product[0].content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <p className="font-notoSerifTC text-md text-gray-800">
        (點擊書籍圖片查看更多詳細資訊)
      </p>
    </div>
    // <div className="w-full flex flex-col-reverse md:flex-row py-6 justify-end items-center">
    //   <div className="w-full md:w-5/12 flex-row items-center">
    //     <div className="flex-col pr-4">
    //       <div className="flex justify-center mt-[150px] md:relative">
    //         {/* <img
    //           src={cloud}
    //           className="hidden md:block absolute right-24 top-[-240px] h-[60px]"
    //         ></img> */}
    //       </div>
    //       {/* <div className="relative">
    //         <img
    //           src={grass}
    //           className="hidden md:block absolute left-24 bottom-[-150px]  h-[100px]"
    //         ></img>
    //         <div className="h-[180px]">
    //           <p className="flex justify-center md:absolute right-0 left-0 top-1 font-notoSerifTC mt-2 md:mt-10 text-xl md:text-2xl  text-black ml-2 text-center tracking-wider	font-semibold leading-relaxed">
    //             來吧來吧，來到安答路西亞
    //             <br />
    //             找我找我在遙遠的格拉拿達
    //             <br />
    //             讓我們讚美無窮的格拉拿達
    //             <br /> 一首新歌唱老了安答路西亞
    //             <br /> 〈喇嘛轉世〉
    //           </p>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>

    //   {/* <img
    //     src={ProductOpen}
    //     alt="hero"
    //     className="w-full mt-[-65px] md:mt-[-2rem] ml-[-8px] md:ml-0 md:w-7/12 md:pl-0 md:pr-0 md:mr-0"
    //     loading="lazy"
    //   /> */}
    // </div>
  );
};

export default ProductFeature;
