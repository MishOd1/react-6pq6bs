import React, { useState } from 'react';
import Card from './card.js';
import Todo from './Card2.js';
import Card3 from './Card3.js';
import './styles.css';
import './style.css';
import './Button.css'

export default function App() {
  const [active, setActive] = useState('');

  return (
    <div className="App">
      <nav>
        <button className="button" onClick={() => setActive('')}>Home</button>
        <button className="button" onClick={() => setActive('FirstCard')}>App one</button>
        <button className="button" onClick={() => setActive('SecondCard')}>App two </button>
        <button className="button" onClick={() => setActive('ThirdCard')}>App three</button>
        <button className="button" onClick={() => setActive('NoCard')}>Collapse</button>
      </nav>
      
      <div>
        {active === 'FirstCard' && <Card title="Soon To come, a count down to the next BTC halving... stay tuned" />}
        {active === 'SecondCard' && <Todo />}
        {active === 'ThirdCard' && <Card3 />}
        {active === '' && <Card title="Welcome, click the desired button from the buttons shown above to select the desired app to be displayed" />}

      </div>
    </div>
  );
}
