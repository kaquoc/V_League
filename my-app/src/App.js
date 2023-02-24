import './App.css';
import React from 'react';
import { useState } from 'react';
import {Overview1,Overview2} from './page_components/Overview.js';
import {Update} from "./page_components/Updates.js";
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
  const[content, setContent] = useState(Overview1);
  const handleOverview = () =>{
      setContent(<Overview2 />);
  }
  const handleUpdates = () =>{
    setContent(<Update />);
  }

  return (
    <>
      <div className="sidenav">
        <a href="#" onClick={handleOverview}>Overview</a>
        <a href="#" onClick = {handleUpdates} >Updates</a>
        <a href="#">Documentation</a>
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
    <Topnav />
    <Sidenav />
    </>
  )
    
}




export default App;
