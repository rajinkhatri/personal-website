import React from 'react'

let works = [
    {
        desc: 'hello world',
        link: 'some url',
        demo: 'demo link'
    },
    {
        desc: 'hello world2',
        link: 'some url2',
        demo: 'demo link2'
    },
    {
        desc: 'hello world3',
        link: 'some url3',
        demo: 'demo link3'
    },
    {
        desc: 'hello world4',
        link: 'some url4',
        demo: 'demo link4'
    },
    {
        desc: 'hello world5',
        link: 'some url5',
        demo: 'demo link5'
    }
]

const Projects = () => {
    return (
        <div className='bg-zinc-300 p-4'>
            <div className='w-4/5 mx-auto my-8 flex flex-col bg-slate-300 border-2 border-black'>
                {
                    works.map((work, index) => (
                        <div key={index} className='flex odd:flex-row even:flex-row-reverse border-2 border-red-300 p-4'>
                            <div className='flex border-2 justify-between border-blue-600'>
                                <div className='flex'>
                                    <img src="" alt="images" />
                                </div>
                                <div className='flex flex-col'>
                                <p className='text-2xl'>{work.desc}</p>
                                    <div className='flex flex-row gap-4'>
                                        <button className='border-2 border-black rounded-lg'>{work.link}</button>
                                        <button>{work.demo}</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                    ))
                }
            </div>
    </div>
    )
}

export default Projects