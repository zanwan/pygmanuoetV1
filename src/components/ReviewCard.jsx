import React from 'react'

import { Avatar1 } from '../assets'

const ReviewCard = () => {
  return (
    <div className='w-full bg-secondary px-4  border-black border-[1px] border-solid'>

        <div className='flex-col justify-start items-start px-4 py-8'>
            <p className='font-notoSerifTC font-normal text-4xl '>社會思索</p>
            <p className='font-notoSerifTC font-normal text-base pt-8 text-justify'>楊牧的作品展示了他對台灣社會變遷的敏銳觀察和對人性多面的探索。他的詩歌和散文不僅具有高度的藝術價值，也是反映台灣社會歷史的重要文獻。讀楊牧，是為了更好地理解台灣的文學和社會，也是為了探索文學的多元性和可能性。豐富的想像力和深刻的人文關懷。他的文字簡練而深刻，常常讓我在閱讀中得到啟示。讀楊牧，是因為他的作品能夠挑戰我們的思想，促使我們反思生活和社會的各個面向。</p>
            
            <div className='flex justify-stretch w-full pt-8 items-center'>
                <div className='font-notoSerifTC font-normal text-base whitespace-nowrap'>林志明・高中老師</div>
                <hr className='border-1 border-black border-solid w-full mx-2'/>
                <img className='w-[60px] h-[60px] object-contain' src={Avatar1} alt='teacher1'/>
            </div>

        </div>

    </div>
  )
}

export default ReviewCard