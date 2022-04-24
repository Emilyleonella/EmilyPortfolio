import React from "react";
import ProjectTemp from "../components/ProjectTemp";
import gateway from "../assests/Gateway_home.png";
import pennyjuice from "../assests/Pennyjuice.png";
import ecom from "../assests/ecom.png";
import AquaAlert from "../assests/AquaAlert.png";
import Up from "../components/Up";

const Project = () => {
  return (
    <div className="App">
      <h1 className="Title">My Projects</h1>
      <ProjectTemp
        imageSrc={gateway}
        title={"Gateway Project"}
        link={"https://emilyleonella.github.io/index.html"}
        gitHubLink={"https://github.com/Emilyleonella/Emilyleonella.github.io"}
      />
      <ProjectTemp
        imageSrc={pennyjuice}
        title={"Penny Juice Redesign"}
        link={"https://avpenny.herokuapp.com/contact"}
        gitHubLink={"https://github.com/tloaeza0/pennyjuice"}
        flipped={true}
      />
      <ProjectTemp
        imageSrc={ecom}
        title={"E-commerce Project"}
        link={"https://ecom-react-db.herokuapp.com/"}
        gitHubLink={"https://github.com/Emilyleonella/ecom_v2"}
      />
      <ProjectTemp
        imageSrc={AquaAlert}
        title={"Hopes Hack"}
        link={"https://aquaalert.herokuapp.com/index.html"}
        gitHubLink={"https://github.com/Emilyleonella/HopeHacks"}
        flipped={true}
      />
      <Up />
    </div>
  );
};

export default Project;
