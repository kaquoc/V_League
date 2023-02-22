import './App.css';
import React from 'react';

function Topnav(){
  return (
    <div class = "topNavBar">
      <a>V League API</a>
        <div class = "right-text">
          <a >About</a>
          <a >Code</a>
        </div>
    </div>
  );
}
//side navigation bar and page content
function Sidenav(){
  return (
    <>
      <div class="sidenav">
        <a href="#">Overview</a>
        <a href="#">Updates</a>
        <a href="#">Documentation</a>
        <a href="#">FAQ</a> 
    </div>
    <div class="main">
      <p>Hello there my name is page content</p>
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
