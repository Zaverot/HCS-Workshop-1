import React from "react";
import "./About.css";
import CutePic from "../../assets/head.jpg";
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';


export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src = {CutePic} className = "intro-picture"  />
        </div>

        <div className="intro-item">
          <Typed
            strings={["Hi! I'm Andy Li and this is CS50"]}
            typeSpeed={40}
          />
          
        </div>
      </div>
    </div>
  );
}
