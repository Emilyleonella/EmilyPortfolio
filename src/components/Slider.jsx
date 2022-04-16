import React from "react";
import "../partials/_slider.scss";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Emily_Picture" className="imgOne" />
          <div className="slider-info">
            <h1 className="slider-title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-info">
            <h1 className="slider-title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="Emily_Picture" className="imgOne" />
        </>
      );
    }
  };

  return (
    <div className="slider" ref={ref}>
      {renderContent()} 
    </div>
  );
};

export default Slider;
