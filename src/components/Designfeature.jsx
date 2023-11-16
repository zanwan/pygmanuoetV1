import React from 'react'

import {productVisual} from '../constants'
import { CoverReveal } from '../assets'

const Designfeature = () => {
  return (
    <div className='flex-col content-center justify-center'>
        <p className='text-center text-black font-notoSerifTC text-base mx-40'>{productVisual[0].content}</p>
        <div className='flex justify-center mt-6'>
        <img src={CoverReveal} alt='hero' className=''/>
        </div>
        
    </div>
  )
}

export default Designfeature