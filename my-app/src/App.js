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
function App() {
  return (
    <>
    <Topnav />
    </>
  )
    
}


export default App;
