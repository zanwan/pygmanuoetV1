import React from 'react'

import { poemTub1, poemTub2, poemTub3, poemTub4 } from '../assets'

const Recitation = () => {
  return (
    <div className='grid grid-cols-4 gap-4 items-center w-full'>
        <div>
            <img src={poemTub1} alt="poemTub-1" className='rounded-xl grayscale hover:grayscale-0'/>
        </div>

        <div>
            <img src={poemTub2} alt="poemTub-1" className='rounded-xl grayscale hover:grayscale-0'/>
        </div>

        <div>
            <img src={poemTub3} alt="poemTub-1" className='rounded-xl grayscale hover:grayscale-0'/>
        </div>

        <div>
            <img src={poemTub4} alt="poemTub-1" className='rounded-xl grayscale hover:grayscale-0'/>
        </div>
    </div>

    
  )
}

export default Recitation