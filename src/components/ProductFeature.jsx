import { product } from "../constants";
import { ProductOpen } from "../assets";

const ProductFeature = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row py-6 justify-end items-center">
      <div className="w-full md:w-1/3 flex-row items-center">
        <div className="flex-col pr-4">
          <p className="font-notoSerifTC mt-6 text-xl font-normal text-black ml-2 text-center tracking-wide subpixel-antialiased leading-loose">
            {product[0].content.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      <img
        src={ProductOpen}
        alt="hero"
        className="w-full mt-[-2rem] ml-[-8px] md:ml-0 md:w-2/3 md:pl-0 md:pr-0 md:mr-0"
        loading="lazy"
      />
    </div>
  );
};

export default ProductFeature;
