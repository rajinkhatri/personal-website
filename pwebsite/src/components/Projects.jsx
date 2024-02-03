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
    }
]

const Projects = () => {
    return (
        <div>
            {
                works.map((work, index) => (
                    <div key={index}>
                        <p>{work.desc}</p>
                        <p>{work.link}</p>
                        <p>{work.demo}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Projects