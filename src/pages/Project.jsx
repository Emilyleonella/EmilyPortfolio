import React from 'react'
import Slider from '../components/Slider'
import gateway from '../assests/Gateway_home.png'
import pennyjuice from '../assests/Pennyjuice.png'
import ecom from '../assests/ecom.png'
import heroCode from '../assests/coding.jpg'
import HeroTwo from '../components/HeroTwo'

const Project = () => {
  return (
    <div className='App'>
      <HeroTwo imageSrc={heroCode} />
      <Slider
        imageSrc={gateway}
        title={"Gateway Project"}
        subtitle={
          <a className='web-link' href="https://gateway-project.emilyleonella.repl.co/index.html"> Check it out</a>
        }
      />


    </div>
  )
}

export default Project