import React from 'react'
import CODING from '../assets/coding.gif'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-evenly w-4/5 mx-auto my-0 items-center border-2 border-red-500 pt-12'>
      <div className='w-9/12 md:w-5/12'>
        <img src={CODING} alt="random computer image" className='rounded-lg h-auto' />
      </div>
        <div className='flex flex-col items-center md:w-1/2'>
        <p className='font-bold text-xl text-blue-600 p-6'>About me</p>
        <p className='text-3xl mx-auto border-2 border-red-300 my-2 w-8/12 font-bold text-gray-600'>Front-end Developer based in Bhaktapur, Nepal</p>
        <p className='w-8/12 m-4 text-xl font-normal'>Hey, my name is Rajin, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
        <p className='w-8/12 m-4 mb-8 text-xl font-normal'>My main stack currently is React in combination with Tailwind CSS and I also work on Node projects every now and then.</p>
        </div>
    </div>
  )
}

export default AboutMe;