import { productVisual } from "../constants";
// import { CoverReveal } from "../assets";

const Designfeature = () => {
  return (
    <div className="flex-col content-center justify-center">
      <p className="text-center text-black font-notoSerifTC text-base mx-20 md:mx-40">
        {productVisual[0].content}
      </p>
      <div className="flex justify-center mt-12 md:mt-6">
        {/* <img src={CoverReveal} alt="hero" className="" loading="lazy" /> */}
      </div>
    </div>
  );
};

export default Designfeature;
