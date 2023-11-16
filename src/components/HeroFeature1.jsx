import React from 'react'

import {Button} from './index'
import { features } from '../constants'

const HeroFeature1 = () => {
  return (
    <div className='w-full flex py-6 justify-between items-center'>

        <div className='w-1/3 flex-row items-center'>
            <div className='flex-col pr-4 mx-auto'>
                <h2 className='font-notoSerifTC text-6xl font-bold text-black ml-2 text-center'>{features[0].title}</h2>
                <p className='font-notoSerifTC mt-14 text-xl font-normal text-black ml-2 text-center tracking-wider leading-loose'>
                    {features[0].content.split('\n').map((line, index) => (
                    <span key={index}>
                    {line}
                    <br />
                    </span>
                    ))}
                </p>

                <div className='mt-16'>
                <Button/>
                </div>
               
                
            </div>
        </div>

        <img src={features[0].img} alt='hero' className='w-2/3 h-1/2 pl-4 pr-0 mr-0'/>

    </div>
  )
}

export default HeroFeature1