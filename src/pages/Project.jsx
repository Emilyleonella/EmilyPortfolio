import React from 'react'
import Slider from '../components/Slider'
import gateway from '../assests/Gateway_home.png'
import pennyjuice from '../assests/Pennyjuice.png'
import ecom from '../assests/ecom.png'
import AquaAlert from '../assests/AquaAlert.png'

const Project = () => {
  return (
    <div className='App'>
      {/* <HeroTwo img={heroCode} /> */}
      <h1 className='Title'>My Projects</h1>
      <Slider
        imageSrc={gateway}
        title={"Gateway Project"}
        subtitle={
          <button className='web-link-btn' href="https://gateway-project.emilyleonella.repl.co/index.html"> Check it out</button>
        }
      />
      <Slider
        imageSrc={pennyjuice}
        title={"Revision Project"}
        subtitle={
          <button className='web-link-btn' href="https://avpenny.herokuapp.com/contact"> Check it out</button>
        }
        flipped={true}
      />
      <Slider
        imageSrc={ecom}
        title={"E-commerce Project"}
        subtitle={
          <button className='web-link-btn'> Check it out</button>
        }
      />
      <Slider
        imageSrc={AquaAlert}
        title={"Hope Hacks"}
        subtitle={
          <button className='web-link-btn' href="https://aquaalert.herokuapp.com/index.html"> Check it out</button>
        }
        flipped={true}
      />  

    </div>
  )
}

export default Project