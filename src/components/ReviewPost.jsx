import { close } from "../assets";

export const ReviewPost = ({ closeModal, article, articleBgColor }) => {
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center "
      aria-labelledby="review-post"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-secondary pt-[10vh] pb-[10vh] max-w-4xl w-full overflow-y-auto h-1/2 mt-8 px-8 md:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row justify-start align-middle font-notoSerifTC mb-8 text-black">
          <img
            className="w-[40px] h-[40px] object-contain rounded-full mr-4"
            src={article.avatar}
            alt="teacher1"
            loading="lazy"
          />
          <h2 className="font-notoSerifTC text-4xl md:text-2xl font-bold mt-1">
            {article.name} ——— 最喜歡的楊牧作品
          </h2>
        </div>

        <div className="font-notoSerifTC font-normal text-lg tracking-wide subpixel-antialiased text-justify text-black">
          {article.quickAnswer.split("\n").map((line, index) => (
            <p key={index} className="indent-8">
              {line}
              <br />
              <br />
            </p>
          ))}
        </div>

        <button
          type="button"
          className="bg-primary absolute top-4 right-6 inline-flex justify-center rounded-full border border-transparent px-4 py-4 font-light text-black hover:bg-[#C7BEAD] sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          <img
            src={close}
            alt="close"
            className="w-[32px] h-[32px] object-contain"
          />
        </button>

        {/* <div className="flex justify-center text-center">
          <button
            type="button"
            className="mt-12 rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-[#C7BEAD]"
            onClick={closeModal}
          >
            關閉
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewPost;
