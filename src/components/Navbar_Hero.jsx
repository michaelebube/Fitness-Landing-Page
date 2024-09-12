import React from 'react'
import Logo from '../assets/Logo.webp'
import HeroImg from '../assets/HeroImg.webp'

const BgStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}


const Navbar_Hero = () => {
  return (
    <>
        <div style={BgStyle} className='relative w-full xs:h-[350px] sm:h-[600px] md:h-screen'>
            <div className='bg-primaryColor opacity-40 absolute inset-0 z-0'></div>
                <div className='xs:py-8 sm:py-12 flex justify-between z-10 relative '>
                    <div className='xs:px-6 sm:px-12 xl:px-[100px] text-white'>
                        <img className='xs:w-[60px] sm:w-[90px] lg:w-[105px] xl:w-[120px] xl:h-[50px] '  src={Logo}  alt="" />
                    </div>

                    <div className='text-white  md:gap-5 xl:gap-120  sm:p-2 md:p-2 xl:p-1 xl:pr-20 mr-4 xs:text-xs sm:text-[18px] md:text-[22px] xl:text-[22px] 
                    font-semibold relative '>
                        <div className='flex flex-col relative'>
                            <div className='flex gap-4
                            xs:gap-3  sm:gap-5 lg:gap-7 xl:gap-10 relative'>
                            <a href="#about-us">
                            <p>ABOUT</p>
                        </a>
                        <a href="#blog"> 
                             <p>BLOG</p> 
                        </a>
                        <a href="#trainers">
                            <p>TRAINERS</p>
                        </a>
                        <a href="#pricing">
                            <p>PRICING</p>
                        </a>
                        
                            </div>

                            <div className=' xs:h-[3px] h-[4px] w-full absolute xs:bottom-[-5px] sm:bottom-[-12px] bg-white'></div>
                        </div>
                        
                        
                    </div>
                        
                </div>

                <div className='flex flex-col space-y-2 xs:px-6 sm:px-12 xl:px-[100px] xs:pt-[40px] sm:pt-[25%] md:pt-[20%] lg:pt-[18%] xl:pt-[70px]  '>
                    <div className='text-white xs:text-5xl sm:text-7xl md:text-8xl lg:text-[110px] 2xl:text-[130px] font-bebasNeue '>
                        <h1>BUILD</h1>
                        
                        <div className='xs:w-[160px] sm:w-[240px] md:w-[320px] lg:w-[366px] xl:w-[450px]' >
                            <h1 className=''>YOUR BODY</h1>
                            <div className='bg-white xs:h-2 h-[10px] '></div>
                            <div className='flex xs:gap-2 sm:gap-[10px] absolute xs:pt-3 sm:pt-6 md:pt-7 xs:text-[8px] sm:text-[13px] md:text-[16px] lg:text-lg font-semibold font-lato '>
                                <button className='xs:w-[75px] sm:w-[115px] md:w-[155px] lg:w-[178px] xl:w-[220px]
                                xs:h-[35px] sm:h-[40px] md:h-[50px] lg:h-[55px] xl:h-[60px] rounded-[4px] bg-white  text-black flex items-center justify-center hover:scale-105   '>GET STARTED</button>
                                 <button className='xs:w-[75px] sm:w-[115px] md:w-[155px] lg:w-[178px] xl:w-[220px] xs:h-[35px] sm:h-[40px] md:h-[50px] lg:h-[55px] xl:h-[60px] rounded-[4px] xs:text-[7.5px]  sm:text-[12px] md:text-[14px] lg:text-lg bg-transparent border  flex items-center justify-center hover:scale-105 '>WATCH REVIEWS</button>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
        </div>
    </>
   
  )
}

export default Navbar_Hero