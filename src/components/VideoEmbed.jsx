import React from 'react';

export const VideoEmbed = ({ closeModal }) => {
  return (
    <div 
      className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center cursor-pointer backdrop-blur-sm" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
      onClick={closeModal}
    >
      <div 
        className="relative bg-[#eae5db00] p-6 overflow-y-auto mt-[80px] h-[85vh] cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <h2 className="text-2xl font-bold mb-4">YouTube Video</h2> */}
        
            <iframe
                style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
                src={`https://www.youtube.com/embed/tSWJitodNSY?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        

        <button 
          type="button" 
          className="absolute top-2 right-2 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          X
        </button>

        {/* <button 
          type="button" 
          className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={closeModal}
        >
          關閉
        </button> */}
      </div>
    </div>
  )
}

export default VideoEmbed;