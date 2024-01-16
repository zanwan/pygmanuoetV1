const SectionTitle = ({ title }) => {
  return (
    <div className="w-full flex flex-row justify-center align-center my-16">
      <div className="h-[1px] bg-black grow mt-8 align-center"></div>
      <h2 className="font-[ChenYuluoyan] text-5xl md:text-6xl text-black text-center align-center whitespace-nowrap mt-3 mx-4 md:mx-10  ">
        {title}
      </h2>
      <div className="h-[1px] bg-black grow mt-8 "></div>
    </div>
  );
};

export default SectionTitle;
