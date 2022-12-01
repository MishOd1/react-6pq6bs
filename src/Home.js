import React from "react";
import './Home.css'
import Para from './Parallax.js'
import './Para.css'
function Home () {

  return(
    <div className="homePageDiv" id="body">
      <div>
        {/* <Para></Para>                         */}
      </div>

     
        
        

      <br></br>
      <br></br>
      <br></br>
      {/* <div>
      <h1  id="homeConatainer">
        Hi, i am <x className="Name">Meshael!</x> 
        <br></br>and this is a simple react project i have made..
      </h1>
      </div> */}
      <br></br>
      
  
      <div id="homeConatainer2">
      <p className="homeP1">Hello! this is my react project!</p>
      <p className="homeP2">The project contains the following Items</p>
      <ul className="ul">
        <li className="homeLI">Starting from the left button, first button will lead you back to this home page.</li>
        <li className="homeLI">Second from left, is a React.js app that will show you a count down to the next BTC halving.</li> 
        <li className="homeLI">Middle button, is a <emp>To-Do</emp> app. </li>
        <li className="homeLI">App three is an introduction to BTC, plus a multiple choice quiz at the end.</li>
        <li className="homeLI">Collapse button will collapse any/all active apps.</li>
        
      </ul>
      </div>
    </div>
  );
};

export default Home;