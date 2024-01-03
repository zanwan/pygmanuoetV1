import { book1Cover } from "../assets";

import { product } from "../constants";

const BookCard = () => {
  const sectionStyle = {
    backgroundImage: `url(${book1Cover})`,
  };

  return (
    <div className="w-full bg-secondary border-black border-[1px] border-solid">
      <div
        className="flex justify-between items-start bg-contain bg-local bg-no-repeat bg-right"
        style={sectionStyle}
      >
        <div className="mx-4 my-4">
          <p className="font-notoSerifTC font-normal text-4xl ">詩卷五冊</p>
          <p className="font-notoSerifTC font-normal text-sm text-justify pr-12 mt-4">
            {product[1].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
