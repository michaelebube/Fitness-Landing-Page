import React from 'react'

const Blog = () => {

    const [email, setEmail] = React.useState('');
  return (
    <>
         <div id='blog' className='w-full xs:h-[520px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[820px] bg-gradient-to-b from-secondaryColor1 to-primaryColor font-lato'>
    <div className='sm:grid grid-cols-2 xs:gap-6 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-16 xs:py-[35px] sm:py-[60px] xs:px-6 md:py-[70px] xl:py-[90px] sm:px-12 xl:px-[100px]'>
        <div className='flex flex-col  sm:space-y-2'>
            <div className='flex gap-1'>
                <h1 className='text-secondaryColor2 xs:text-[15px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px]'>BLOG</h1>
                <h1 className=' xs:text-[12px] sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] sm:pl-[2px] xs:pt-[3px] sm:pt-[5px] xl:pt-[6px] text-primaryColor'>PUMPED</h1>
            </div>
            <div className='xs:w-[110px] sm:w-[175px] md:w-[230px] lg:w-[290px] xl:w-[285px]'>
                <h1 className='text-secondaryColor2 xs:text-[22px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-60px'>Newsletter</h1>
                <div className='flex w-full xs:my-1 sm:my-3 lg:my-4'>
                    <div className='h-1 w-1/2 bg-secondaryColor2'></div>
                    <div className='h-1 w-1/2 bg-secondaryColor1'></div>
                </div>
            </div>
         
            <div>
                <h1 className='xs:text-sm  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-semibold xs:pb-1 sm:pb-2 xl:pb-4 xs:pt-2 xl:pt-5 text-secondaryColor2'>
                   Stay Informed, Stay Motivated
                </h1>
                <p className='xs:text-[12px] text-[16px] md:text-lg lg:text-xl xl:text-2xl text-secondaryColor2 xs:pb-2 sm:pb-4 xl:pb-8'>
                    Welcome to the Blog Pumped Newsletter! Get the latest fitness tips, workout routines, and nutrition advice straight to your inbox.
                </p>
               <h1 className=' xs:text-sm sm:text-lg md:text-2xl text-secondaryColor2 font-semibold lg:text-3xl xl:text-4xl xs:mb-1   md:mb-2 lg:mb-4  '>
                    What You'll Find:
                </h1>
                <div className='text-secondaryColor2 xs:text-[12px] sm:text-[16px] md:text-lg lg:text-xl xl:text-2xl   sm:pb-2 '>
                    <p className='xs:mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5'>
                    Expert Tips: Insights from top trainers and fitness experts.
                    </p>
                    <p className='xs:mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5'> 
                        Workout Plans: New routines for all fitness levels.
                    </p>
                    <p className=' xs:mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5'>
                        Nutrition Advice: Healthy recipes and eating tips.
                    </p>
                    <p className='sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5'>
                        Success Stories: Real-life transformations to inspire you.
                    </p>


                </div>

                 
                
                

            </div>
        </div>

         <div className='xs:py-[14px] sm:py-[60px] md:py-[70px] xl:py-[90px]  '>
        <div className='  sm:space-y-2'>
            <div className=' lg:pt-[90px] xl:pt-[85px]  '>
            <h1 className='xs:text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl   text-secondaryColor2  font-semibold sm:pb-2 xs:pb-2' >
                Subscribe Today!
            </h1>
            <div className='xs:text-[12px] sm:text-[17px] md:text-lg lg:text-xl xl:text-2xl '>
                 <p className='xs:pb-2 sm:pb-2 md:pb-4 lg:pb-6 text-secondaryColor2'>
                Join our community and receive exclusive content to keep you motivated on your fitness journey. <br />Subscribe now and start transforming your life!
            </p>

            <p className='text-secondaryColor2'>
                Sign up for the Blog Pumped Newsletter today!
            </p>
            </div>
           
            <div className='xs:mt-2 sm:mt-8 md:mt-5 lg:mt-8'>
                            <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='w-full xs:text-sm md:text-lg  rounded-md xs:h-[25px] sm:h-[40px] md:h-[45px] lg:h-[50px] xl:h-[60px] border border-gray-300 dark:border-gray-500 py-[2px] xs:px-2 sm:px-2 mb-2 xl:mb-4'  />
                            <button className='w-full xs:h-[25px] sm:h-[40px] md:h-[45px] lg:h-[50px] xl:h-[60px] rounded-md bg-secondaryColor1  text-white
                            xs:text-[12px] sm:text-[15px] md:text-lg lg:text-xl xl:text-2xl hover:text-secondaryColor1 hover:bg-secondaryColor2'>
                                SUBSCRIBE
                            </button>
                </div>
        </div>
        </div>
        </div>

        
    </div>
</div>

    </>
   
  )
}

export default Blog