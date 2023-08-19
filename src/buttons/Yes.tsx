import "./buttons.css"
import React, { useState } from 'react';

function Yes() {
  const [shaking, setShaking] = useState(false);

  const handleClick = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
    }, 500);
  };

  return (
    <>
      <button className={`shaking-button ${shaking ? 'shake' : ''}`} onClick={handleClick}>
        <p className="text">Yes</p>
      </button>
    </>
  )

}

export default Yes
