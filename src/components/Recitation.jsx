import React, { useState } from 'react';
import { poemTub1, poemTub2, poemTub3, poemTub4 } from '../assets';
import VideoEmbed from './VideoEmbed';

const Recitation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className='grid grid-cols-4 gap-4 items-center w-full'>
      <div onClick={openModal} className='cursor-pointer'>
        <img src={poemTub1} alt="poemTub-1" className='rounded-xl grayscale hover:grayscale-0'/>
      </div>

      <div onClick={openModal} className='cursor-pointer'>
        <img src={poemTub2} alt="poemTub-2" className='rounded-xl grayscale hover:grayscale-0'/>
      </div>

      <div onClick={openModal} className='cursor-pointer'>
        <img src={poemTub3} alt="poemTub-3" className='rounded-xl grayscale hover:grayscale-0'/>
      </div>

      <div onClick={openModal} className='cursor-pointer'>
        <img src={poemTub4} alt="poemTub-4" className='rounded-xl grayscale hover:grayscale-0'/>
      </div>

      {isModalOpen && <VideoEmbed closeModal={closeModal} />}
    </div>
  );
}

export default Recitation;