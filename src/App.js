import React, { useState } from 'react';
import Card from './card.js';
import Card2 from './Card2.js';
import Card3 from './Card3.js';
import './styles.css';
import './style.css';

export default function App() {
  const [active, setActive] = useState('');

  return (
    <div className="App">
      <nav>
        <button onClick={() => setActive('FirstCard')}>App one</button>
        <button onClick={() => setActive('SecondCard')}>App two </button>
        <button onClick={() => setActive('ThirdCard')}>App three</button>
      </nav>
      <div>
        {active === 'FirstCard' && <Card title="Test" />}
        {active === 'SecondCard' && <Card2 />}
        {active === 'ThirdCard' && <Card3 />}
      </div>
    </div>
  );
}
