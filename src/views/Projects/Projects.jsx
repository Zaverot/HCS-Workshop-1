import React from "react";
import Project from "../../components/Project/Project";
import Webscraper from "../../assets/webscraper.png";
import diamond from "../../assets/webscraper.jpg";
import { Link } from "react-router-dom";


export default function ProjectsScreen() {
  const proyectos = [
    <Project 
    title = "HCS-Workshop-1" 
    link = "/about"
    source = {Webscraper}
    desc = "A personal website portfolio built with React, JS, and CSS"/>,
    <Project
    title = "More to come!"
       link = "https://bing.com"
       source = {diamond}
       desc = ""/>
  ]

  
  

  function filterProject(arr, query) {
    return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
  }

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };



 /*React.useEffect(() => {
    const results = proyectos.filter(({ Project }) => (Project.title.toLowerCase().includes(searchTerm)));
    setSearchResults(results);
    //const results = filterProject(proyectos, searchTerm)
  }, [searchTerm]);*/

  /*<input
        type="text"
        placeholder="Search for any name, keyword, software, or language"
        value={searchTerm}
        onChange={handleChange}
      />*/
  
  return (
    
    <div className="screen-background">

      <div>{ proyectos }</div>
    </div>
  );
}
