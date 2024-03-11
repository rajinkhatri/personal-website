import React from 'react'
import Pulmonary from '../assets/pulmonary.png';
import OldPages from '../assets/oldpages.png';
import Netflix from '../assets/netflix.png';
import Default from '../assets/default.jpg'

let works = [
    {
        name: 'Engineering-Bookhub',
        desc: 'Website created using React and Django with CRUD operations',
        link: 'https://github.com/rajinkhatri/Engineering-BookHub',
        demo: 'demo link',
        image: Default,
    },
    {
        name: 'netflix_UI_copy',
        desc: 'A copy of the netflix site made using React and CSS. Includes only the home page and signup page',
        link: 'https://github.com/rajinkhatri/netflix_UI_copy',
        demo: 'demo link2',
        image: Netflix
    },
    {
        name: 'php_CRUD',
        desc: 'A website created using php and has CRUD functions built into it',
        link: 'https://github.com/rajinkhatri/php-CRUD',
        demo: 'demo link3',
        image: Default
    },
    {
        name: 'Pulmonary Classifier',
        desc: 'Project done for the completion of minor project in college. Uses CNN and a React based website to classify diseases from an image.',
        link: 'https://github.com/rajinkhatri/Pulmonary-Classifier',
        demo: 'demo link4',
        image: Pulmonary
    },
    {
        name: 'cloned-pages',
        desc: 'A very old project where I tried to copy the UI of the facebook home page.',
        link: 'https://github.com/rajinkhatri/cloned-pages',
        demo: 'demo link5',
        image: OldPages
    }
]

const Projects = () => {
    return (
        <div className='bg-zinc-200 p-6'>
            <div className='w-4/5 mx-auto my-8 flex flex-col bg-slate-200 border-2 border-sky-300'>
                <p className='text-4xl font-bold mx-auto my-4 text-slate-700'>My Projects..</p>
                <span className='lg:text-xl sm:md:text-lg w-9/12 mt-4 mx-auto'>"My code has a talent for breeding bugs faster than rabbits on a spring day!"</span>
                {
                    works.map((work, index) => (
                        <div key={index} className='flex odd:flex-row even:flex-row-reverse p-12 border-b-4 border-b-violet-400'>
                            <div className='flex md:lg:w-10/12 lg:flex-row max-[660px]:flex-col gap-8 p-4 rounded-2xl border-2 border-white'>
                                <div className='flex'>
                                    <img className='md:lg:w-full rounded-3xl sm:w-8/12 sm:mx-auto sm:my-0' src={work.image} alt="images" />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='md:lg:text-4xl sm:text-2xl m-2 font-bold text-gray-600 sm:mx-auto'>{work.name}</p>
                                    <p className='md:lg:text-2xl sm:text-xl m-3 font-normal'>{work.desc}</p>
                                    <div className='flex flex-row font-semibold sm:mx-auto sm:my-0 gap-4'>
                                        <button className='border-2 border-black rounded-lg p-2 m-2'>
                                            <a href={work.link} target='_blank'>GitHub</a>
                                        </button>
                                        <button className='border-2 border-black rounded-lg p-2 m-2'>
                                            <a href=''>Demo Link</a>
                                        </button>
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