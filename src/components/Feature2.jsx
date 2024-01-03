import { features } from "../constants";

const HeroFeature1 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:py-6 justify-start items-center">
      <img
        src={features[1].img}
        alt="hero"
        className="w-full mt-[2rem] md:w-2/3 md:h-1/2 md:pl-0"
        loading="lazy"
      />

      <div className="w-full md:w-full flex-row items-center">
        <div className="flex-col mt-[2rem] md:pr-8 md:ml-[-40px]">
          <h2 className="font-notoSerifTC text-6xl font-bold text-black ml-2 text-center">
            {features[1].title}
          </h2>
          <p className="font-notoSerifTC mt-10 text-xl font-normal text-black ml-2 text-center tracking-wider	 leading-relaxed">
            {features[1].content.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroFeature1;
