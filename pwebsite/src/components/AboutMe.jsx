import React from 'react'
import CODING from '../assets/coding.gif'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-evenly w-4/5 mx-auto my-0 items-center pt-12'>
      <div className='w-9/12 md:w-5/12 m-10'>
        <img src={CODING} alt="random computer image" className='rounded-lg h-auto' />
      </div>
        <div className='flex flex-col items-center md:w-1/2'>
        <p className='font-bold md:lg:text-4xl text-blue-600 p-6 max-[660px]:text-2xl sm:text-2xl'>About me</p>
        <p className='lg:text-3xl sm:text-2xl mx-auto  my-2 w-8/12 font-bold text-gray-600 max-[660px]:text-2xl'>Front-end Developer based in Bhaktapur, Nepal</p>
        <p className='w-8/12 m-4 lg:text-xl sm:text-xl font-normal'>Hey, my name is Rajin, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
        <p className='w-8/12 m-4 mb-8 lg:text-xl sm:text-xl font-normal'>My main stack currently is React in combination with Tailwind CSS and I also work on Node projects every now and then.</p>
        </div>
    </div>
  )
}

export default AboutMe;