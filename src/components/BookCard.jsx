import React from 'react'

import {book1Cover} from '../assets'

const BookCard = () => {

    const sectionStyle = {
        backgroundImage: `url(${book1Cover})`,
      };

  return (
    <div className='w-full bg-secondary border-black border-[1px] border-solid'>

        <div className='flex justify-between items-start bg-contain bg-local bg-no-repeat bg-right' style={sectionStyle}>

            <div className='mx-4 my-4'>
            <p className='font-notoSerifTC font-normal text-4xl '>詩卷五冊</p>
            <p className='font-notoSerifTC font-normal text-sm text-justify pr-12 mt-4'>水之湄、花季、燈船、傳說、瓶中稿、北斗行、吳鳳、禁忌的遊戲
海岸七疊、有人、完整寓言、時光命題、涉事、介殼蟲
長短歌行、微塵</p>
            </div>
            

        </div>

    </div>
  )
}

export default BookCard