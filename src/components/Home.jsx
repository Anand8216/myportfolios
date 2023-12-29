import React from 'react'
import "./Home.css"
import ProfilePic from '../assets/New-file.gif'
import {BsArrowRightCircle} from 'react-icons/bs'
const Home = () => {
  return (
    <div name="home" className=' h-screen w-full mt-0 mb-2  py-6' id="home">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>

            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer

                </h2>
                <p className='text-white py-4 max-w-md text-justify'>
                As a Full Stack Developer specializing in the MERN stack, I thrive in creating dynamic and seamless user experience, I am dedicated to delivering high-quality software products that make a positive impact.
                </p>
                <div>
                <a href="#portfolio">
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'>
                        
                       Portfolio
                         
                        <span>
                        <BsArrowRightCircle/>
                        </span>
                    </button>
                    </a> 
                </div>
            </div>
            <div className='mt-16' id="isd">
                <img src={ProfilePic} alt="this is me" className='profileImg'/>
                </div>
        </div>
    </div>
  )
}

export default Home