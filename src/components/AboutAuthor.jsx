import { youngmu } from "../assets";
import { authorInfo } from "../constants";

const AboutAuthor = () => {
  return (
    <div className="w-full bg-secondary px-16 py-8  border-black border-[1px] border-solid ">
      <div className="flex justify-between content-center mt-8">
        <div className="hidden md:w-1/2 md:block">
          <img
            src={youngmu}
            alt="youngmu"
            className="object-contain"
            loading="lazy"
          />
        </div>

        <p className="w-full md:w-1/2 my-auto ml-8 text-justify font-notoSerifTC text-base">
          {authorInfo[0].content.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
