// import { BookSet1, } from "../assets";

const BookCard = ({ product, height }) => {
  // const sectionStyle = {
  //   backgroundImage: `url(${book1Cover})`,
  // };

  return (
    <div className="w-full bg-secondary border-black border-[1px] border-solid">
      <img src={product.img} alt="" className="h-[350px] mx-auto mt-8" />
      <div className=" flex flex-col justify-between items-center">
        <div className="mx-8 my-8">
          <p className="font-notoSerifTC font-semibold text-3xl">
            {product.title}
          </p>
          <p
            className={`font-notoSerifTC font-normal text-base text-justify mt-4 h-[${height}px]`}
          >
            {product.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
