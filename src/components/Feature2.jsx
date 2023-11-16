import React from 'react'

import { features } from '../constants'

const HeroFeature1 = () => {
  return (
    <div className='w-full flex py-6 justify-between items-center'>

        <img src={features[1].img} alt='hero' className='w-2/3 h-1/2 pl-4'/>

        <div className='w-1/3 flex-row items-center'>
            <div className='flex-col pr-4 ml-[-40px]'>
                <h2 className='font-notoSerifTC text-6xl font-bold text-black ml-2 text-center'>{features[1].title}</h2>
                <p className='font-notoSerifTC mt-10 text-xl font-normal text-black ml-2 text-center tracking-wider	 leading-relaxed'>
                    {features[1].content.split('\n').map((line, index) => (
                    <span key={index}>
                    {line}
                    <br />
                    </span>
                    ))}
                </p>
                
            </div>
        </div>

        

    </div>
  )
}

export default HeroFeature1