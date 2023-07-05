import './App.css';
import React from 'react';
import { useState } from 'react';
import {Overview} from './page_components/Overview.js';
import {Update} from "./page_components/Updates.js";
import {Documentation} from "./page_components/Documentation.js";
import { Contribution } from './page_components/Contribution';
function Topnav(){
  return (
    <div className = "topNavBar">
      <a>V League API</a>
        <div className = "right-text">
          <a >About</a>
          <a >Code</a>
        </div>
    </div>
  );
}

//side navigation bar and page content
function Sidenav(){
  const[content, setContent] = useState(Overview);
  const handleOverview = () =>{
      setContent(<Overview />);
  }
  const handleUpdates = () =>{
    setContent(<Update />);
  }
  const handleDocu = () =>{
    setContent(<Documentation />);
  }
  const handleContribute = () =>{
    setContent(<Contribution />);
  }

  return (
    <>
      <div className="sidenav">
        <a href="#" onClick={handleOverview}>Overview</a>
        <a href="#" onClick = {handleUpdates} >Updates</a>
        <a href="#" onClick = {handleDocu}>Documentation</a>
        <a href="#" onClick = {handleContribute}>Contribution</a>
        <a href="#">FAQ</a> 
    </div>
    <div className="main">
      {content}
    </div>
  </>
  )
}
function App() {
  return (
    <>
    <Topnav/>
    <Sidenav />
    </>
  )
}


export default App;
