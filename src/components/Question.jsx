import React from 'react'

import { questions } from '../constants'

const Question = () => {
  return (
    <div className='flex-col w-1/2 justify-center mx-auto mt-8'>
        {
            questions.map((question,index) => (

                <div id='{question.id}' className='flex-col my-4'>
                <p className='text-2xl font-notoSerifTC font-bold'>{question.question}</p>
                <p className='text-md font-notoSerifTC'>{question.answer}</p>
                </div>
            ))

        }
    </div>
  )
}

export default Question