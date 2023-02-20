//Layout, home page
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

//lets start with top menu bar: containing two link About and Code
function topNavBar(){
  return (
    <div>
     <a alt = "link to about page">About</a>
     <a href = "https://github.com/kaquoc/V_League/tree/main" >Code</a>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<topNavBar />);

export default index;