
import React from "react";

function Card() {
  const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };

  return (
    <div>
      <h2>App</h2>
      <button onClick={handleClick}>Twitter</button>
    </div>
  );
}

export default Card;