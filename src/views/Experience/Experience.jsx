import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (

    <div 
    onClick={() => {
      props.setActiveTitle(props.description);
    }}
      className = "timeline-item"> <h1 className = "timeline-title">{props.title}</h1> </div> 
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Click on a project to learn more!");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem title = "Research Intern" 
          description = "Research Intern at UT San Antonio, working on a cost-effective pulse oximetry device. Relavent skills include MATLAB, Solidworks, and 3D Printing."
          setActiveTitle={setActiveTitle} />
          <TimeLineItem title = "FIRST Robotics"
          description = "Founder and Captain of world class FIRST Tech Challenge robotics team. Relevant skills include Java, Swift, CNC, documentation, event organization, project management, fundraising."
          setActiveTitle={setActiveTitle}></TimeLineItem>
          <TimeLineItem title = "roller coaster tester" setActiveTitle={setActiveTitle}></TimeLineItem>
          
        </div>
        <div className="highlight-background">
          <h1 className = "active-title">{activeTitle}</h1>
        </div>
      </div>
    </div>
  );
}
