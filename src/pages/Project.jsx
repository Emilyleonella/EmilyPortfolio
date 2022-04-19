import React from 'react'
import Slider from '../components/Slider'
import gateway from '../assests/Gateway_home.png'
import pennyjuice from '../assests/Pennyjuice.png'
import ecom from '../assests/ecom.png'

const Project = () => {
  return (
    <div className='App'>
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