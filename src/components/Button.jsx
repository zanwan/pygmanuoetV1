import React from 'react'

const Button = () => {
  return (
    <div className='flex font-notoSerifTC text-xl my-4 justify-center'>
      <button className='bg-white px-8 py-2 rounded-md mr-4 hover:bg-secondary' > 誠品 </button>
      <button className='bg-white px-8 py-2 rounded-md mr-4 hover:bg-secondary'> 金石堂 </button>
      <button className='bg-white px-8 py-2 rounded-md hover:bg-secondary'> 博客來 </button>
    </div>
  )
}

export default Button