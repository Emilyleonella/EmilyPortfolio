import React from "react";
import ProjectTemp from "../components/ProjectTemp";
import gateway from "../assests/Gateway_home.png";
import pennyjuice from "../assests/Pennyjuice.png";
import ecom from "../assests/ecom.png";
import AquaAlert from "../assests/AquaAlert.png";

const Project = () => {
  return (
    <div className="App">
      <h1 className="Title">My Projects</h1>
      <ProjectTemp
        imageSrc={gateway}
        title={"Gateway Project"}
        link={"https://gateway-project.emilyleonella.repl.co/index.html"}
      />
      <ProjectTemp
        imageSrc={pennyjuice}
        title={"Revision Site"}
        link={"https://avpenny.herokuapp.com/contact"}
        flipped={true}
      />
      <ProjectTemp
        imageSrc={ecom}
        title={"E-commerce Project"}
      />
       <ProjectTemp
        imageSrc={AquaAlert}
        title={"Hopes Hack"}
        link={"https://aquaalert.herokuapp.com/index.html"}
        flipped={true}
      />

    </div>
  );
};

export default Project;
