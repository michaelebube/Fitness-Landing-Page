import React from 'react'
import Polygon from '../assets/About Polygon.webp'
import PolygonImg from '../assets/PolygonImg.webp'

const About = () => {
  return (
    <>
        <div id='about-us' className='w-full xs:h-[300px] sm:h-[500px] md:h-[650px] lg:h-[700px] xl:h-[800px] bg-primaryColor font-lato'>
            <div className='grid grid-cols-2 gap-2 xs:py-[40px] sm:py-[70px] xs:px-6 md:py-[100px] sm:px-12 xl:px-[100px]'>
                <div className='flex flex-col sm:space-y-2'>
                    <div className='flex gap-1'>
                        <h1 className='text-secondaryColor2 sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px]'>ABOUT</h1>
                        <h1 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] sm:pl-[2px] sm:pt-[5px]  xl:pt-[6px] text-secondaryColor1'>PUMPED</h1>
                    </div>
                    <div className=' xs:w-[175px] sm:w-[240px] md:w-[320px] lg:w-[400px] xl:w-[400px]  '>
                        <h1 className='text-secondaryColor2 xs:text-[26px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-60px '>Welcome to Us</h1>
                        <div className='flex w-full xs:my-1 sm:my-3 lg:my-4'>
                            <div className='h-1 w-1/2 bg-secondaryColor2 '></div>
                             <div className='h-1 w-1/2 bg-secondaryColor1 '></div>
                        </div>
                        
                    </div>

                    <div>
                        <h1 className='text-white xs:mt-2 xs:text-[8px] sm:text-[14.5px] md:text-[17px] lg:text-[19px] xl:text-[25px] md:leading-relaxed '>Welcome to Pumped, your ultimate fitness destination! At Pumped, we offer exclusive memberships that grant you access to a diverse range of expert trainers. Whether you're looking to build strength, improve endurance, or achieve overall wellness, our professional trainers are here to guide you every step of the way. Join our community and take advantage of personalized training programs, state-of-the-art facilities, and a supportive environment that will help you reach your fitness goals. Get Pumped and transform your life today!</h1>
                    </div>
                </div>
                
                <div>
                    <div className='relative xs:ml-3 xs:my-[60px] sm:py-[3px] sm:my-16 md:my-18 lg:my-15 lg:p-2 sm:mx-2 md:mx-5 xl:ml-[80px]'>
                        <div className='absolute inset-0 bg-primaryColor opacity-50 z-10'></div>
                        <img src= {Polygon} className=' h-auto' alt="" />
                        <img src={PolygonImg} alt="" className='absolute inset-0 h-full object-cover' style={{ clipPath: 'polygon(50% 0%, 90% 21%, 100% 64%, 72% 100%, 28% 100%, 2% 60%, 10% 20%)' }} 
/>

                    </div>
                </div>
            </div>
        </div>
    </>
   
  )
}

export default About