import React from "react";
import './Home.css'
function Home () {
  return(
    <div className="homePageDiv">
      <br></br>
      <br></br>
      <br></br>
      <h1>
        
      </h1>
      <br></br>
      <p className="homeP1">if you check the top of the page you will find 5 buttons</p>
      <ul className="ul">
        <li className="homeLI">Starting from the left button, first button will lead you back to this home page.</li>
        <li className="homeLI">Second from left, is a React.js app that will show you a count down to the next BTC halving.</li> 
        <li className="homeLI">Middle button, is a <emp>To-Do</emp> app. </li>
        <li className="homeLI">App three is an introduction to BTC, plus a multiple choice quiz at the end.</li>
        <li className="homeLI">Collapse button will collapse any/all active apps.</li>
        
      </ul>
    </div>
  );
};

export default Home;