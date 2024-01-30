import React from 'react'
import Profile from '../assets/profilepicture.jpg' 
import { Link } from 'react-router-dom';

const MainBody = () => {
  return (
    <div className='mx-auto my-0 bg-zinc-100'>
    <div className=' flex flex-col md:flex-row-reverse w-4/5 mx-auto my-0'>
        <img className='mx-auto my-16 sm:my-4 md:w-96 sm:w-80 md:h-96 sm:h-80 rounded-full' src={Profile} alt="Profile Picture" />
        <div className='w-3/4 sm:w-full mx-auto my-0 border-4 border-red-700'>
            <p className='text-zinc-800 m-4 pt-8 pb-8 text-6xl font-bold md:p-8 md:mt-20 md:mb-4 w-11/12 md:mx-auto border-2 border-blue-700 '>Front-End React Developer 👋</p>
            <p className=' text-xl mx-4 my-2 w-11/12 '>Hi, I am Rajin Khatri. A pasionate Front-End React Developer based in Kathmandu, Nepal. 📍</p>
        </div>
    <div>
      {/* <Link to={url1}>test1</Link> */}
      <a href="https://www.stefantopalovic.com/#about">Test 1</a>
    </div>
    </div>
    </div>
  )
}

export default MainBody