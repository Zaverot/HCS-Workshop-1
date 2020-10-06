import React from "react";
import "./Education.css";
//import School from "../../components/School/School";
import Reagan from "../../assets/reagan.png";
import Harvard from "../../assets/harvard.png";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import "../../components/School/School.css";

function School(props) {
    
  return (
      <Link
      onMouseEnter={() => {
        props.setActiveTitle(props.courses);
      }}
      onMouseLeave={() => {
        props.setActiveTitle("Hover over a school to see most recent courses!");
      }}
        to={{ pathname: props.link }}
        className="school-background"
        target="_blank"
        
      >
        <div className="school-image">
          <img className="school-image" src={props.source} />
        </div>
        <div className="school-info">
          <h1 className="school-title">{props.title}</h1>
          <h2 className="school-subtitle">{props.subtitle}</h2>
          <h2 className="school-subtitle">{props.date}</h2>
          <p className="school-description">{props.desc}</p>
          <p className="school-description">{props.clubs}</p>
        </div>
      </Link>
  );
}

export default function EducationScreen() {

  const [activeTitle, setActiveTitle] = React.useState("Hover over a school to see most recent courses!");

  const schools = [
    <School 
    title = "Harvard University" 
    subtitle = "Cambridge, MA"
    date = "2020-2024"
    link = "https://www.harvard.edu"
    source = {Harvard}
    desc = "B.A. in Computer Science"
    courses = "CS50, STAT110, APPHY50A"
    clubs = "HCS, HURC, CSA, CrimTech, ABB"
    setActiveTitle={setActiveTitle} />,
    <School
    title = "Ronald Reagan High School"
    subtitle = "San Antonio, TX"
    date = "2016-2020"
    link = "https://www.neisd.net/reagan"
    source = {Reagan}
    desc = "Graduated Summa Cum Laude, 4.0 GPA"
    courses = "Multi-Var Calc, AP: Chem, Bio, CS A, Gov, Phys C, Macro"
    clubs = "Class Officer, Marching Band, Varsity Swim, NHS, Mu Alpha Theta, Momentum"
    setActiveTitle={setActiveTitle} />
  ]

  return (
    <div className="screen-background">
      <currentButton title = "FIRST Robotics" setActiveTitle={setActiveTitle}/>
        <div className="highlight-background-1">
          <h1 className = "active-title">{activeTitle}</h1>
        </div>
      <div className="education-background">
        

        <div>{ schools }</div>
      </div>
    </div>
  );
}
