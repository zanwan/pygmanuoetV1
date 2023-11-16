import React from 'react'

import { product } from '../constants'
import {ProductOpen} from '../assets'

const ProductFeature = () => {
  return (
    <div className='w-full flex py-6 justify-between items-center'>

        <div className='w-1/3 flex-row items-center'>
            <div className='flex-col pr-4'>
                
                <p className='font-notoSerifTC mt-6 text-2xl font-normal text-black ml-2 text-center'>
                    {product[0].content.split('\n').map((line, index) => (
                    <span key={index}>
                    {line}
                    <br />
                    </span>
                    ))}
                </p>
                
            </div>
        </div>

        <img src={ProductOpen} alt='hero' className='w-2/3 h-1/2 pl-4 pr-0 mr-0'/>

    </div>
  )
}

export default ProductFeature