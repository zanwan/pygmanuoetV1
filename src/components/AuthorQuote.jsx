import React from 'react'

import {authorInfo} from '../constants'

const AuthorQuote = () => {
  return (
    <div className='mx-24 my-16'>
            <p className='text-3xl font-notoSerifTC text-center tracking-wide leading-relaxed'>
                {
                    authorInfo[1].content.split('\n').map((line,index) => (
                        <span key={index}>
                            {line}
                            <br/>
                        </span>
                    ))
                }
            </p>
        </div>
  )
}

export default AuthorQuote