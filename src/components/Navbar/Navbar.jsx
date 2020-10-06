import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Andy Li</h1>
        <div className="info-bar">
          <p className="info-item">andy_li@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link className = "info-link" to={{ pathname: "https://instagram.com/zaverot"}} target= "_blank">Instagram</Link>
          <Link className = "info-link" to={{ pathname: "https://github.com/zaverot"}} target= "_blank">GitHub</Link>
          <Link className = "info-link" to={{ pathname: "https://www.linkedin.com/in/zaverot/"}} target= "_blank">LinkedIn</Link>
          <Link className = "info-link" to={{ pathname: "https://open.spotify.com/user/heyna4dee9tz7mvayhs8lhxjj?si=4TJOBkrHTxua_UaVOGTXOg"}} target= "_blank">Spotify</Link>
        </div>
      </div>
      <div className = "nav-background">
      <Link className = "nav-link" to = {{ pathname: "/education"}}>education</Link>
      <Link className = "nav-link" to = {{ pathname: "/experience"}}>experience</Link>
      <Link className = "nav-link" to = {{ pathname: "/about"}}>about</Link>
      <Link className = "nav-link" to = {{ pathname: "/projects"}}>projects</Link>
      
      </div>

    </>
  );
}
