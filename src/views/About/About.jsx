import React from "react";
import "./About.css";
import CutePic from "../../assets/head.jpg";
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';


function Random(props) {
  return (

    <div >
      <img onClick={() => {
        props.setActiveTitle(props.fact);
      }}
      className = "intro-picture" src={props.source} />
    </div>
    
  );
}


function getFact(){

  const facts = [
    "I'm a CS student at Harvard, cohort 2024!", 
    "I aspire to forge productive, beneficial, and fun interactions with people all across the world through technology.",
    "Coffee > tea",
    "Rainbow sherbet is my favorite ice cream flavor",
    "I learned how to bake pizzas from scratch after only 19 failed attempts",
    "I like sunsets by the water",
    "I love percussion and piano!",
    "My favorite color is #531a88",
   
   
   ]
  return (
    facts[Math.floor(Math.random()*facts.length)]
  )
}


export default function AboutScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Click the image to know some (fun) facts!");



  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
        <Random source = {CutePic}
        fact = {getFact}
        setActiveTitle={setActiveTitle}/>
        </div>
        
        <div className="intro-item">
          <Typed
            className = "typed-text"
            strings={["Hi! I'm Andy Li and you're currently in my section of memory. Be sure to click around!"
            
          ]}
            typeSpeed={35}
          />
          
        </div>
      </div>
      <currentButton setActiveTitle={setActiveTitle}/>
      <br></br>
      <div className="highlight-background-1">
          <h1 className = "active-title">{activeTitle}</h1>
        </div>
    </div>
  );
}
