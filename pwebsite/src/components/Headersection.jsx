import React from 'react'
import CV from '../assets/Rajin Khatri CV.pdf'

const Headersection = () => {
  return (
    <div className='bg-neutral-400'>
    <div className=' w-11/12 mx-auto mb-0 font-bold flex justify-between p-4'>
    <p className='lg:text-4xl sm:md:text-2xl'>Rajin.dev</p>
    <div className='sm:md:text-xs lg:text-xl font-semibold flex justify-between gap-4  md:flex-row'>
    {/* <p >Home</p>
    <p >About me</p>
    <p >Projects</p> */}
    <button className='border-2 border-white rounded-2xl p-2 hover:scale-110'>
      <a href={CV} download>Download CV</a>
    </button>
    </div>
    </div>
    </div>
  )
}

export default Headersection;