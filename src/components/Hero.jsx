import React from 'react'

const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
      <img src={imageSrc} alt="desk_setup" className='hero-img'/>
      <h1 className='hero-title'>Welcome to my Portfolio</h1>

    </div>
  )
}

export default Hero