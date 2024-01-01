const SectionTitle = ({title}) => {
  return (
    <div className='w-full flex justify-between my-16'>
        <div className='h-[1px] bg-black grow mt-8'></div>
        <div className='font-notoSerifTC text-5xl font-bold text-black text-center align-center whitespace-nowrap mx-10 '>{title}</div>
        <div className='h-[1px] bg-black grow mt-8'></div>
    </div>
  )
}

export default SectionTitle