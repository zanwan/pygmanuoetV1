import { article } from "../articles/article";

export const ReviewPost = ({ closeModal }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center cursor-pointer"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <div
        className="relative bg-[#EAE5DB] p-6 rounded shadow-lg max-w-4xl w-full overflow-y-auto h-[80vh] mt-16 cursor-auto px-32"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">讀楊牧全集二三事</h2>
        <div className="font-notoSerifTC font-normal text-lg tracking-wide subpixel-antialiased text-justify">
          {article[0].content.split("\n").map((line, index) => (
            <p key={index} className="indent-8">
              {line}
              <br />
              <br />
            </p>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-2 right-2 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          X
        </button>

        <button
          type="button"
          className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          關閉
        </button>
      </div>
    </div>
  );
};

export default ReviewPost;
