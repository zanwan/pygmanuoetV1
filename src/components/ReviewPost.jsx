import { article } from "../articles/article";
import { close } from "../assets";

export const ReviewPost = ({ closeModal, article, articleBgColor }) => {
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center pt-[12vh]"
      aria-labelledby="review-post"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-secondary pt-[10vh] pb-[10vh] max-w-4xl w-full overflow-y-auto h-[100vh] mt-8 cursor-auto px-8 md:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between align-middle font-notoSerifTC mb-8">
          <h2 className="font-[ChenYuluoyan] text-4xl md:text-5xl font-bold ">
            {article.articleTitle}
          </h2>
          <p className="text-xl mt-4">{article.name}</p>
        </div>

        <div className="font-notoSerifTC font-normal text-lg tracking-wide subpixel-antialiased text-justify">
          {article.article.split("\n").map((line, index) => (
            <p key={index} className="indent-8">
              {line}
              <br />
              <br />
            </p>
          ))}
        </div>

        <button
          type="button"
          className="bg-primary absolute top-0 right-0 inline-flex justify-center rounded-full border border-transparent px-4 py-4 font-light text-black hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          <img
            src={close}
            alt="close"
            className="w-[32px] h-[32px] object-contain"
          />
        </button>

        <div className="flex justify-center text-center">
          <button
            type="button"
            className="mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
            onClick={closeModal}
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPost;
