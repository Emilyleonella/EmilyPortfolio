import React from 'react'
import Hero from '../components/Hero'
import heroimage from "../assests/heroImg.jpg";
import myPic from "../assests/Emily.jpeg"
import Slider from '../components/Slider';

const Homepage = () => {
  return (
    <div className="App">
      <Hero imageSrc={heroimage} />
    </div>
  )
}

export default Homepage