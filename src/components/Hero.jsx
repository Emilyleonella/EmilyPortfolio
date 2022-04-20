import React from 'react'
import { FiChevronsDown } from "react-icons/fi";
const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
      <img src={imageSrc} alt="desk_setup" className='hero-img'/>
      <h1 className='hero-title'>Welcome to my Portfolio</h1>
      <fig className='fig-con'><FiChevronsDown  className='arrow-down'/></fig>
    </div>
  )
}

export default Hero