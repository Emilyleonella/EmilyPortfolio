import React from "react";
import Hero from "../components/Hero";
import heroimage from "../assests/heroImg.jpg";
import myPic from "../assests/Emily.jpeg";
import Slider from "../components/Slider";
import myPic2 from "../assests/Emily2.jpeg";

const Homepage = () => {
  return (
    <div className="App">
      <Hero imageSrc={heroimage} />
      <Slider
        imageSrc={myPic}
        title={"About Me"}
        subtitle={
          "I am a Coding Apprentice for Road to Hire who is currently falling in love with the Language of Software Development. I am Innovative, Highly Motivated, Bilingual, and Creative. Experienced in Front-end and Back-end development, and with all stages of the Development Life Cycle for Dynamic Software projects."
        }
      />
      <Slider
        imageSrc={myPic2}
        title={"About Me"}
        subtitle={"Hello World"}
        flipped={true}
      />
    </div>
  );
};

export default Homepage;
