import { youngmu } from "../assets";
import { authorInfo } from "../constants";

const AboutAuthor = () => {
  return (
    <div className="w-full px-6 md:px-16 py-4 ">
      <div className="flex flex-col md:flex-row justify-center content-center md:mt-8">
        <div className="w-[230px] mx-auto mb-10 md:w-6/12 md:block md:mb-8">
          <img
            src={youngmu}
            alt="youngmu"
            className="object-contain"
            loading="lazy"
          />
        </div>

        <p className="w-full md:w-1/2 my-auto md:ml-8 text-justify font-notoSerifTC text-lg">
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
