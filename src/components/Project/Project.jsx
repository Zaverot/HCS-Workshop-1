import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";



export default function Project(props) {
  return (
    
    <React.Fragment>
    <Link to={{pathname: props.link}} className = "project-background" target="_blank">
    <div className = "project-image">
      <img className = "project-image" src={props.source} />
    </div>
    <div className = "project-info">
      <h1>{props.title}</h1>
      <p className = "project-description">{props.desc}</p>
    </div>
    </Link>
    </React.Fragment>
    );
}
