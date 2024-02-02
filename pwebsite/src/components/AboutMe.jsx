import React from 'react'
import CODING from '../assets/coding.gif'

const AboutMe = () => {
  return (
    <div className='flex flex-col w-4/5 mx-auto my-0 items-center border-2 border-red-500 m-12 pt-12'>
        <img src={CODING} alt="random computer image" className='rounded-lg w-9/12 h-auto' />
        <p className='font-bold text-xl text-blue-600 p-6'>About me</p>
        <p className='text-3xl mx-auto border-2 border-red-300 my-2 w-8/12 font-bold text-gray-600'>Front-end Developer based in Bhaktapur, Nepal</p>
        <p>Hey, my name is Stefan, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
        <p>My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
    </div>
  )
}

export default AboutMe;