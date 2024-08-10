import React from 'react'
import PricingBg from '../assets/PricingBg.png'
import pricingData from '../pricingData'
import PricingProfile from './pricingProfile'

const BgStyle = {
  backgroundImage: `url(${PricingBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const Pricing = () => {
  return (
    <div id='pricing' style={BgStyle} className='xs:h-[1700px] sm:w-full sm:h-[1050px] md:h-[1150px] lg:h-[1250px] xl:h-[820px] relative font-lato'>
      <div className='absolute inset-0 bg-black opacity-70 z-0'></div>
      <div className='grid grid-cols-2 gap-2 xs:py-[40px] sm:pt-[40px] xs:px-6 md:py-[60px] sm:px-12 xl:px-[90px]'>
        <div className='flex flex-col sm:space-y-2 z-10'>
          <div className='flex gap-1'>
            <h1 className='text-secondaryColor2 sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[35px]'>PRICING</h1>
            <h1 className='sm:text-xl md:text-[21px] lg:text-[21px] xl:text-[27px] sm:pl-[2px] sm:pt-[5px] md:pt-[5.5px] xl:pt-[5px] text-secondaryColor1'>PUMPED</h1>
          </div>
          <div className='xs:w-[200px] sm:w-[278px] md:w-[370px] lg:w-[370px] xl:w-[370px]'>
            <h1 className='text-secondaryColor2 xs:text-[26px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-60px '>Membership Plan</h1>
            <div className='flex w-full xs:my-1 sm:mt-3  lg:my-4'>
              <div className='h-1 w-1/2 bg-secondaryColor2'></div>
              <div className='h-1 w-1/2 bg-secondaryColor1'></div>
            </div>
          </div>
        </div>
      </div>
        <div className='sm:px-12 xl:px-[90px] grid sm:grid-cols-2 xl:flex xs:gap-4 sm:gap-6 md:gap-12 '>
            {pricingData.map((item, index) => (
          <PricingProfile key={item.id} pricingData={item} isNew={index === 1} />
        ))}
      
        </div>
        
    </div>
  );
};

export default Pricing;
