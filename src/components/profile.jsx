import React from 'react'

const profile = ({data}) => {
  return (
    <>
        <div className='xs:mt-5 sm:mt-10 md:mt-12 relative xs:w-[180px] xs:h-[200px] sm:w-[250px] sm:h-[300px] md:w-[340px] md:h-[380px] lg:w-[450px] lg:h-[470px] xl:w-[300px] xl:h-[350px] font-lato mx-auto'>
  <img src={data.img} alt={data.name} className='w-full h-full rounded-md object-cover' />
  <div className='absolute rounded-md inset-0 bg-black opacity-50 group-hover:opacity-50'></div>
  <button className='absolute xs:top-[40%] xs:left-[25%] sm:top-[42.5%] sm:left-[25%] md:left-[30%] lg:left-[35%] xl:left-[20%] xs:p-2 sm:p-[10px] rounded-md bg-transparent text-white border border-secondaryColor2 xs:text-sm lg:text-xl font-semibold sm:text-lg xl:w-[180px] xl:h-[50px] hover:scale-105'>
    View Profile
  </button>
</div>
  
    </>
   
  )
}

export default profile