import React from 'react'
import Slider from '../components/Slider'
import gateway from '../assests/Gateway_home.png'
import pennyjuice from '../assests/Pennyjuice.png'
import ecom from '../assests/ecom.png'
import heroCode from '../assests/laptop-code.jpg'
import HeroTwo from '../components/HeroTwo'

const Project = () => {
  return (
    <div className='App'>
      {/* <HeroTwo img={heroCode} /> */}
      <h1 className='Title'>My Projects</h1>
      <Slider
        imageSrc={gateway}
        title={"Gateway Project"}
        subtitle={
          <a className='web-link' href="https://gateway-project.emilyleonella.repl.co/index.html"> Check it out</a>
        }
      />
      <Slider
        imageSrc={pennyjuice}
        title={"Revision Project"}
        subtitle={
          <a className='web-link' href="https://avpenny.herokuapp.com/contact"> Check it out</a>
        }
        flipped={true}
      />
      <Slider
        imageSrc={ecom}
        title={"E-commerce Project"}
        subtitle={
          <a className='web-link'> Check it out</a>
        }
      />


    </div>
  )
}

export default Project