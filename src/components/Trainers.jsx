import React from 'react';

import data from '../trainerData';
import Profile from './profile';




const Trainers = () => {
  return (
    <div id='trainers' className='w-full bg-primaryColor font-lato'>
      <div className='xs:py-[40px]  sm:py-[70px] xs:px-6 md:py-[100px] sm:px-12 xl:px-[100px]'>
        <div className='flex flex-col sm:space-y-2'>
          <div className='flex gap-1'>
            <h1 className='text-secondaryColor2 xs:text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px]'>TRAINERS</h1>
            <h1 className='xs:text-[15px] sm:text-[16px] md:text-xl lg:text-2xl xl:text-[24px] sm:pl-[2px] xs:pt-[4px] sm:pt-[3px] md:pt-1 xl:pt-[5px] text-secondaryColor1'>PUMPED</h1>
          </div>
          <div className='xs:w-[165px] sm:w-[210px] md:w-[220px] lg:w-[275px] xl:w-[285px]'>
            <h1 className='text-secondaryColor2 xs:text-[36px] sm:text-5xl md:text-[50px] lg:text-[62px] xl:text-[64px]'>Worktime</h1>
            <div className='flex w-full xs:my-1 sm:my-3 lg:my-4 xl:mb-10'>
              <div className='h-1 w-1/2 bg-secondaryColor2'></div>
              <div className='h-1 w-1/2 bg-secondaryColor1'></div>
            </div>
          </div>
          
        </div>
        
<div className='relative'>
  <div className='grid xs:grid-cols-1 xs:justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-2'>
    {data.map((item) => (
      <Profile key={item.id} data={item} />
    ))}
  </div>
  <div className='flex justify-center'>
    <button className='xs:mt-8 sm:mt-10 lg:mt-14 bg-transparent border border-secondaryColor2 xs:w-[80px] xs:h-[35px] sm:h-[35px] sm:w-[120px] md:w-[120px] md:h-[40px] lg:w-[150px] xl:h-[50px] xl:w-[175px] lg:h-[45px] xl:text-xl rounded-md font-semibold hover:scale-105 text-white'>
      See All
    </button>
  </div>
</div>



        
          
        
      </div>
      
    </div>
  );
};

export default Trainers;
