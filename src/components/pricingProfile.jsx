import React from 'react';

const PricingProfile = ({ pricingData, isNew }) => {
  return (
    <div className=" font-lato relative bg-transparent  border-[4px] border-white p-4  text-white xs:w-[240px] xs:h-[360px] sm:w-[250px] sm:h-[390px] md:w-[320px] md:h-[400px] lg:w-[400px] lg:h-[440px] xl:w-[350px] xl:h-[450px] mx-auto hover:scale-105 hover:cursor-pointer ">
      <div className="absolute top-[-10px] right-[-25px]">
        {isNew && (
          <span className="bg-secondaryColor1 text-sm font-bold py-5 px-3 xl:px-4 xl:py-6 rounded-full">
            NEW
          </span>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center sm:px-4 sm:py-2 space-x-1 border border-">
          <h1 className="text-4xl">${pricingData.price}</h1>
          <h2 className="text-lg sm:pt-3 xs:pt-4">/ {pricingData.timeline}</h2>
        </div>
        {!isNew && (
            <div className='xs:w-[116%] sm:w-[115%] md:w-[113%] lg:w-[110%] xl:w-[112.5%]  mt-5 mb-2 lg:mb-3 p-1  text-center bg-white'>
            <h3 className="sm:text-xl lg:text-2xl text-black  ">{pricingData.title}</h3>
        </div>
        )}
        

        {isNew && (
            <div className='xs:w-[116%] sm:w-[115%] md:w-[113%] lg:w-[110%] xl:w-[112.5%]  mt-5 mb-2 lg:mb-3 p-1 text-center bg-secondaryColor1'>
            <h3 className="sm:text-xl lg:text-2xl text-white  ">{pricingData.title}</h3>
        </div>
        )}
        
        <div className="lg:text-lg space-y-2 text-center  sm:w-[210px] md:w-[250px] lg:w-[340px] xl:w-[250px] ">
          <p className=' border-b-[1px] py-3'>One time access to all clubs</p>
          <p className=' border-b-[1px]  py-3 lg:py-4   '>Group trainer</p>
          <p className=' border-b-[1px] py-3 lg:py-4   '>Book a group class</p>
          <p className=' border-b-[1px] py-3 lg:py-4   '>Book a group class</p>
        </div>
      </div>
    </div>
  );
};

export default PricingProfile;
