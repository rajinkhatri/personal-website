import React from 'react'
import Profile from '../assets/profilepicture.jpg' 
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import REACT from '../assets/react.svg'
import JS from '../assets/js.png'
import NODE from '../assets/node.png'
import DJANGO from '../assets/django.png'
import GitHub from '../assets/GitHub.png'
import LinkedIn from '../assets/linkedin.png'
import { Link } from 'react-router-dom';

// extend tailwind.css to make the image borders move not spin
// animate-spin

const MainBody = () => {
  return (
    <div className='mx-auto my-0 bg-zinc-200'>
    <div className=' flex flex-col md:flex-row-reverse w-4/5 mx-auto my-0'>
        <img className=' mx-auto my-16 md:mb-0 sm:my-4 md:w-96 sm:w-80 md:h-96 sm:h-80 rounded-3xl' src={Profile} alt="Profile Picture" />
        <div className='w-3/4 sm:w-full mx-auto my-0'>
            <p className='text-zinc-800 m-4 pt-8 pb-8 text-6xl font-bold md:p-8 md:mt-20 md:mb-4 w-11/12 md:mx-auto '>Front-End React Developer 👋</p>
            <p className=' text-xl mx-auto my-2 w-10/12 '>Hi, I am Rajin Khatri. A pasionate Front-End React Developer based in Kathmandu, Nepal. 📍</p>
        </div>
    </div>
    <div className='flex flex-row justify-center md:justify-start w-9/12 md:my-2 my-8 mx-auto gap-4'>
      <a target='_blank' href="https://github.com/rajinkhatri" className=''>
        <img className='w-8 h-8' src={GitHub} alt="" />
        </a>
      <a target='_blank' href="https://www.linkedin.com/in/rajin-khatri-220b49217/" className=''>
        <img className='w-8 h-8' src={LinkedIn} alt="" />
        </a>
    </div>
    <TechStack />
    </div>
  )
}

const TechStack = () => {
  return (
    <div className=' flex flex-col md:lg:flex-row text-2xl text-gray-600 align-middle font-semibold pb-8 w-6/12 mx-auto'>
        <div className='mx-auto my-0 md:my-4 underline'>
          <p>Tech Stack</p>
        </div>
          <div className='flex flex-row gap-12 mx-auto my-4 '>
            <div className='flex flex-row gap-2 hover:scale-125'>
            <img src={HTML} className='w-12 h-12' alt="" />
            <img src={CSS} className='w-12 h-12' alt="" />
            </div>
            <div className='flex flex-row gap-2 hover:scale-125'>
            <img src={JS} className='w-12 h-12' alt="" />
            <img src={REACT} className='w-12 h-12' alt="" />
            </div>
            <div className='flex flex-row gap-2 hover:scale-125'>
          <img src={NODE} className='w-12 h-12' alt="" />
          <img src={DJANGO} className='w-12 h-12' alt="" />
            </div>
          </div>
    </div>
  )
}

export default MainBody