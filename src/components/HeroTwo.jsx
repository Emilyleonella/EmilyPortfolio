import React from "react";

const HeroTwo = ({ img }) => {
  return (
    <div className="hero-two">
      <img src={img} alt="code" className="hero-img-two" />
      <h1 className='hero-title'>Welcome to my Portfolio</h1>
    </div>
  );
};

export default HeroTwo;
