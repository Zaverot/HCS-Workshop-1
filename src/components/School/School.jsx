import React from "react";
import "./School.css";
import { Link } from "react-router-dom";


export default function School(props) {
    
  return (
    <React.Fragment>
      <Link
        to={{ pathname: props.link }}
        className="school-background"
        target="_blank"
        onMouseEnter={() => {
          props.setActiveTitle(props.title);
        }}
      >
        <div className="school-image">
          <img className="school-image" src={props.source} />
        </div>
        <div className="school-info">
          <h1 className="school-title">{props.title}</h1>
          <h2 className="school-subtitle">{props.subtitle}</h2>
          <h2 className="school-subtitle">{props.date}</h2>
          <p className="school-description">{props.desc}</p>
          <p className="school-description">{props.courses}</p>
          <p className="school-description">{props.clubs}</p>
        </div>
      </Link>
    </React.Fragment>
  );
}
