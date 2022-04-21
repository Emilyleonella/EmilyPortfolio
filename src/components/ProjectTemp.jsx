import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectTemp = ({ imageSrc, title, link, flipped }) => {
  const { ref, inView } = useInView({
  threshold: 0.4,
  });

  const renderCon = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="project_screenshot" className="imgOne" />
          <div className="slider-info">
            <h1 className="project-title">{title}</h1>
            <a target="_blank" href={link}><button className='web-link-btn'>Deployed Site</button> </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-info">
            <h1 className="project-title">{title}</h1>
            <a  target="_blank" href={link}><button className='web-link-btn'>Deployed Site</button> </a>
          </div>
          <img src={imageSrc} alt="project-screenshot" className="imgOne" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
      {renderCon()} 
    </div>
  );
};

export default ProjectTemp;
