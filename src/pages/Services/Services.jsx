import React from 'react'
import service1 from "../../assets/images/image (1).png"
import service2 from "../../assets/images/image (2).png"
import service3 from "../../assets/images/service (1).png"
import service4 from "../../assets/images/service.png"
export default function Services() {
  return (
   <>
   <section className="services  bg-bg dark:bg-[#1C2139]">
    <div className='text-center mb-16'>
        <h2 className='uppercase font-display font-normal text-5xl leading-16.5 text-[#10152E] dark:text-white mb-1'>Services</h2>
    <span className='uppercase font-display font-light text-[20px] leading-7.5 text-[#10152E]  dark:text-white'>What we do best</span>
    </div>
    <div>
<div className='mt-32 w-9/12   mx-auto ' >
  <div className='mb-6'>
            <p className='text-[#4E5265] dark:text-[#CCCED5]    text-[16px] leading-6 font-light mb-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et <br/>magnis dis parturient montes, nascetur ridiculus 
</p>
<p className='text-[#4E5265]  dark:text-[#CCCED5]            text-[16px] leading-6 font-light  mb-6'  >mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
<p  className='text-[#4E5265]   dark:text-[#CCCED5]               text-[16px] leading-6 font-light'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
  </div>
        <div className='flex gap-6  mb-6 flex-wrap  md:flex-nowrap'>
            <div className='w-full  md:w-1/2'>
                <img src={service1} alt="" className='w-full'/>
            </div>
         <div className='w-full  md:w-1/2 '>   
            <h3 className='uppercase font-normal text-2xl leading-8 text-[#10152E] dark:text-white mb-3'>Strategic Planning Services</h3>
            <p className='font-light text-[16px] text-[#4E5265]  dark:text-[#CCCED5]  leading-6'>Our Strategic Planning Services are designed to help you set clear<br/> goals and map out a path to achieve them. We work closely with you to<br/>  develop actionable strategies that align with your vision and priorities,<br/> 
             ensuring every step moves you closer to success.</p></div>
        </div>
         <div>
          
            <div className='flex  mb-6 gap-6 flex-wrap md:flex-nowrap'>
                  <div className='w-full  md:w-1/2'>
                <img src={service2} alt="" className='w-full' />
            </div>
                <div  className='w-full md:w-1/2'>
                     <h3 className='uppercase font-normal text-2xl leading-8 text-[#10152E]  dark:text-white mb-3'>Comprehensive Project Management</h3>
            <p className='font-light text-[16px] text-[#4E5265]  dark:text-[#CCCED5]  leading-6'>
                From start to finish, our Comprehensive Project Management ensures <br/>every detail is handled with precision. We coordinate timelines, resources,<br/> and communication to deliver efficient and seamless <br/>
                execution, so you can focus on what matters most.
            </p>
                </div>
            </div>
           
         </div>
          <div className='flex mb-6 gap-6 flex-wrap md:flex-nowrap'>
            <div  className='w-full md:w-1/2 '>
                <img src={service3} alt="" className='w-full' />
            </div>
            <div  className='w-full md:w-1/2'>
               <h3 className='uppercase font-normal text-2xl leading-8 text-[#10152E]  dark:text-white mb-3'>Reliable Maintenance and Support</h3>
             <p className='font-light text-[16px] text-[#4E5265]  dark:text-[#CCCED5]   leading-6'>Keep everything running smoothly with our Reliable Maintenance and <br/>Support. We provide consistent care and proactive solutions to address<br/> issues before they arise, giving you peace of mind and uninterrupted <br/> performance.</p>
            </div>
          </div>
           <div className='flex gap-6  mb-6 flex-wrap md:flex-nowrap'>
            <div  className='w-full md:w-1/2'> <img src={service4} alt="" className='w-full'/></div>
            <div className='w-full md:w-1/2'>
          <h3 className='uppercase font-normal text-2xl leading-8 text-[#10152E]  dark:text-white mb-3'>Expert Consultation Services</h3>
        
           <p className='font-light text-[16px] text-[#4E5265]   dark:text-[#CCCED5]   leading-6'>Gain the insights you need with our Expert Consultation Services.<br/> Whether you’re looking for guidance, fresh perspectives, or actionable <br/>advice, we’re here to help you navigate challenges and make informed <br/>decisions confidently.</p>
            </div>
           </div>
</div>
    </div>
   </section>
   </>
  )
}
