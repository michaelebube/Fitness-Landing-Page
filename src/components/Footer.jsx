import React from 'react'
import FooterImg from '../assets/FooterImg.jpg'
import Logo from '../assets/Logo.png'
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'

const BgStyle = {
    backgroundImage: `url(${FooterImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Footer = () => {
  return (
    <>
        <div style={BgStyle} className='relative xs:w-full sm:h-[360px] md:h-[400px] sm:pt-10'>
            <div className='bg-black opacity-75 absolute inset-0 z-0'></div>
            <div className=' relative z-10 flex flex-col xs:space-y-3 sm:space-y-4 md:space-y-5 items-center justify-center '>
                <h1 className='text-secondaryColor2  xs:text-lg sm:text-xl md:text-2xl xl:text-3xl'>Call Us Today</h1>
                <h1 className='text-slate-500 xs:text-2xl sm:text-4xl'>+23473905612</h1>
                <div className='flex xs:gap-2 sm:gap-12 text-secondaryColor2 xs:text-[16px] xs:text-lg md:text-xl'>
                    <h1 className='pl-10'>890 Tems Street <br /> Ohio, USA.</h1>
                    <h1 className='pl-8'>Monday - Saturday <br /> 8am - 9am</h1>
                </div>
                 <div className='flex w-full xs:my-1   lg:my-4'>
              <div className='h-1 w-1/2 bg-secondaryColor2'></div>
              <div className='h-1 w-1/2 bg-secondaryColor1'></div>
            </div>
            <div className='xs:px-6 sm:px-12 xl:px-[100px] text-white'>
                        <img className='xs:w-[60px] sm:w-[90px] md:w-[100px] lg:w-[105px] xl:w-[120px] xl:h-[50px] '  src={Logo}  alt="" />
                </div>
                <div className='sm:pt-1 flex xs:gap-2 sm:gap-1 text-white  z-10'>
                    <FaTwitter className='xs:w-[30px]  sm:w-[60px] sm:h-[25px] md:h-[30px] hover:text-primaryColor'/>
                    <FaFacebook className='xs:w-[30px] sm:w-[60px] sm:h-[25px] md:h-[30px] hover:text-primaryColor'/>
                    <FaInstagram className='xs:w-[30px] sm:w-[60px] sm:h-[25px] md:h-[30px] hover:text-pink-400'/>
                </div>
                <h1 className='text-white'>&copy; 2024 PUMPED ALL RIGHTS RESERVED </h1>

            </div>
            

        </div>
    </>
  )
}

export default Footer