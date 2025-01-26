import React, { useContext } from 'react'
import { themeContext } from '../ContextAPI/ThemeContext'

const About = () => {
  const { color } = useContext(themeContext)
  return (
    <div className='w-full flex flex-col gap-4 py-12 pb-16'>
      <h2 className="text-5xl text-center font-bold text-[#242d49]">
        <span>About</span> <span className='text-blue-700' style={{color: `${color}`}}>Me</span>
      </h2>
      <div className="w-20 h-[5px] bg-[#004aad] mx-auto rounded-2xl" style={{background: `${color}`}} ></div>
        <div className="w-full p-4 text-xl">
          <p className="text-justify text-[#242d49]">
            <span>My</span> name is{" "}
            <span >Hariom Chouhan</span> an expert
            in Web development. I have over 7 project experiences within the
            journey. My specialty is in React, and creating attractive
            Responsive Websites and web apps using React, TailwindCSS, CSS,
            HTML, Bootstrap, Node, MongoDB, and Express.
          </p>
        </div>
        </div>
  )
}

export default About
