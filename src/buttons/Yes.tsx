import "./buttons.css"
import Style from "./Yes.module.css"
import React, { useState, useRef } from 'react';

function Yes() {
  const [shaking, setShaking] = useState(false);
  const processing = useRef(false);

  const handleClick = () => {
    //動作中は再アニメーションしない
    if (processing.current) return;
    processing.current = true;
    setTimeout(() => {
      processing.current = false;
    }, 500);

    setShaking(true);
    setTimeout(() => {
      setShaking(false);
    }, 500);
  };

  return (
    <>
      <button className={`${Style.shakingButton} ${shaking ? Style.shake : ''}`} onClick={handleClick}>
        <p className={Style.text}>Yes</p>
      </button>
    </>
  )

}

export default Yes
