import {yangnuSocialMedia} from '../constants'
import {fisfisaSocialMedia} from '../constants'
import {publisherSocialMedia} from '../constants'
import {contact} from '../constants'

const Footer = () => {
  return (
    <div className='flex justify-center w-1/2 mx-auto my-16'>
        <div className='flex-col justify-start w-1/3'>
            <p className='text-white text-md'>相關網站</p>
            <a href={yangnuSocialMedia[0].url} target='_blank' rel='noreferrer'>
            <p className='text-white font-notoSerifTC'>{yangnuSocialMedia[0].title}</p>
            <p className='text-white font-notoSerifTC'>{yangnuSocialMedia[1].title}</p>
            <p className='text-white font-notoSerifTC'>{yangnuSocialMedia[2].title}</p>
            </a>
        </div>

        <div className='flex-col justify-start w-1/3'>
            <p className='text-white text-md'>出版社</p>
            <a href={publisherSocialMedia[0].url} target='_blank' rel='noreferrer'>
            <p className='text-white font-notoSerifTC'>{publisherSocialMedia[0].title}</p>
            </a>
        </div>

        <div className='flex-col justify-start w-1/3'>
            <p className='text-white text-md'>行銷協力</p>
            <a href={fisfisaSocialMedia[0].url} target='_blank' rel='noreferrer'>
            <p className='text-white font-notoSerifTC'>{fisfisaSocialMedia[0].title}</p>
            </a>
        </div>

    </div>
  )
}

export default Footer