import React from "react";
import "./About.css";
import CutePic from "../../assets/bighappy.png";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src = {CutePic} className = "intro-picture"  />
        </div>
        <div className="intro-item">
          Wow wow wow Your Name is a pretty cool person! check out all these
          details
        </div>
      </div>
    </div>
  );
}
