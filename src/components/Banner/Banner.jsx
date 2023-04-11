import React from 'react';

const Banner = ({children}) => {
  return (
    <div className='text-center bg-gradient-to-b from-indigo-50 to-indigo-50 h-[15vh] md:h-[20vh] flex justify-center items-center relative'>
      <img className='absolute object-cover left-0 w-[40%] md:w-[15%] bottom-0' src="/Vector.png" alt="" />
      <img className='absolute object-cover right-0 w-[40%] md:w-[15%] -top-20' src="/Vector-1.png" alt="" />
      <p className='font-bold text-lg'>{children}</p>
    </div>
  );
};

export default Banner;