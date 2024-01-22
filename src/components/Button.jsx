const Button = () => {
  return (
    /* 書店導購按鈕 */
    <div className="flex font-notoSerifTC text-xl my-4 justify-center">
      <a
        href="https://www.eslite.com/product/10012010532682512875000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white px-8 py-2 rounded-md mr-4 hover:bg-secondary">
          誠品
        </button>
      </a>
      {/* <button className='bg-white px-8 py-2 rounded-md mr-4 hover:bg-secondary'> 金石堂 </button> */}
      <a
        href="https://www.books.com.tw/products/0010980187?sloc=main"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white px-8 py-2 rounded-md hover:bg-secondary">
          博客來
        </button>
      </a>
    </div>
  );
};

export default Button;
