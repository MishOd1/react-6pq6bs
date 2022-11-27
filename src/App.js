import React, { useState } from 'react';
import Card from './card.js';
import Todo from './Card2.js';
import Card3 from './Card3.js';
import './styles.css';
import './style.css';
import './Button.css'
import Home from './Home.js'


import Fotter2 from './footer2.js'


export default function App() {
  const [active, setActive] = useState('');

  return (
    <div className="App">
        {active === '' && <Home />}
        {active === 'Home' && <Home />}
      <nav>
        <button className="button" onClick={() => setActive('Home')}>Home</button>
        <button className="button" title="BTC Halving" onClick={() => window.open("https://react-myg6o9.stackblitz.io")}>App one</button>
        <button className="button" title="To-Do List" onClick={() => setActive('SecondCard')}>App two </button>
        <button className="button" title="What Is BTC?" onClick={() => setActive('ThirdCard')}>App three</button>
        <button className="button" id="collapse"  onClick={() => setActive('NoCard')}>Collapse</button>
        
      </nav>
     
      <div>
        
        {active === 'SecondCard' && <Todo />}
        {active === 'ThirdCard' && <Card3 />}
      </div>
      <footer className="footerMain">
        <Fotter2 />
      </footer>
    </div>
  );
}
