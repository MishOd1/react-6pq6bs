import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Para.css';


function Para() {

  return (
    <div className="Para">
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={5}
          style={{
            backgroundImage: `url("https://img.freepik.com/premium-photo/bitcoin-against-south-african-rand-american-dollar-close-up-image-conceptual-image-digital-crypto-currency-against-world-traditional-currency_133187-1705.jpg?w=1380")`,
            backgroundSize: 'cover',
          }}
        >

          <p className="parag"> Scroll Down </p>

        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Para;
