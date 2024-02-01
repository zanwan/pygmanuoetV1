import { close } from "../assets";

export const ReviewPost = ({ closeModal, article }) => {
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center"
      aria-labelledby="review-post"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative py-4 px-2 md:px-6 ">
        <button
          type="button"
          className=" bg-white md:bg-primary z-20 absolute top-[60px] md:top-4 right-[30px] md:right-0 inline-flex justify-center rounded-full border border-transparent px-2 py-2 md:px-4 md:py-4 font-light text-black hover:bg-[#C7BEAD] sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          <img
            src={close}
            alt="close"
            className="w-[32px] h-[32px] object-contain"
          />
        </button>
        <div
          className="relative bg-secondary pt-[10vh] pb-[10vh] max-w-4xl w-full overflow-y-auto h-[75vh] md:h-[90vh] mt-8 px-8 md:px-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-row justify-start align-middle font-notoSerifTC mb-8 text-black">
            <img
              className="w-[55px] h-[55px] object-contain rounded-full mr-4"
              src={article.avatar}
              alt="teacher1"
              loading="lazy"
            />
            <h2 className="font-notoSerifTC text-xl md:text-2xl font-medium mt-1 flex flex-col justify-start">
              {article.name}{" "}
              <span className="text-gray-900 text-sm pr-2 md:pr-0">
                {article.nameCard.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </span>
            </h2>
          </div>

          <div className="font-notoSerifTC font-normal text-lg tracking-wide subpixel-antialiased text-justify text-black px-2 md:px-8">
            {article.content.split("\n").map((line, index) => (
              <p key={index} className="indent-8">
                {line}
                <br />
                <br />
              </p>
            ))}
          </div>

          <div className="bg-primary flex flex-col justify-center">
            <h2 className="font-notoSerifTC text-xl md:text-2xl font-bold my-4 text-center text-black ">
              必推的楊牧
            </h2>

            <div className="font-notoSerifTC font-normal text-md tracking-wide subpixel-antialiased text-black text-justify px-4  md:px-8">
              {article.quickAnswer.split("\n").map((line, index) => (
                <p key={index} className="indent-8">
                  {line}
                  <br />
                  <br />
                </p>
              ))}
            </div>
          </div>

          {article.fullReview && (
            <div>
              <div className="font-notoSerifTC text-xl md:text-3xl font-bold my-8 text-center text-black ">
                {article.articleTitle}
              </div>

              <div className="font-notoSerifTC font-normal text-lg tracking-wide subpixel-antialiased text-justify text-black px-2 md:px-8">
                {article.article.split("\n").map((line, index) => (
                  <p key={index} className="indent-[38px]">
                    {line}
                    <br />
                    <br />
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center text-center">
            <button
              type="button"
              className="mt-12 rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-[#C7BEAD]"
              onClick={closeModal}
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPost;
