import React from "react";
import Hero from "../components/Hero";
import heroimage from "../assests/heroImg.jpg";
import myPic from "../assests/Emily.jpeg";
import Slider from "../components/Slider";
import myPic2 from "../assests/Emily2.jpeg"

const Homepage = () => {
  return (
    <div className="App">
      <Hero imageSrc={heroimage} />
      <Slider
        imageSrc={myPic}
        title={"About Me"}
        subtitle={
          "dwfwehfowhnwijf fjwief we fowe fwoe fwoef pe fpwe fjof wpe jfpw f"
        }
      />
      <Slider
        imageSrc={myPic2}
        title={"About Me"}
        subtitle={
          "dwfwehfowhnwijf fjwief we fowe fwoe fwoef pe fpwe fjof wpe jfpw f"
        }
        flipped={true}
      />
    </div>
  );
};

export default Homepage;
