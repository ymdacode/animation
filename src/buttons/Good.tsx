import Style from "./Good.module.css"
import React, { useState, useRef } from 'react';

function Good() {
  const [num, setNum] = useState(0);
  const [click, setClick] = useState(false);
  const processing = useRef(false);

  const handleClick = () => {
    setNum(num + 1);

    //動作中は再アニメーションしない
    if (processing.current) return;
    processing.current = true;
    setTimeout(() => {
      processing.current = false;
    }, 500);

    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 500);
  };


  return (
    <>
      <button className={`${Style.good} ${click ? Style.extend : ''}`} onClick={handleClick}>
        <div>
        </div>
        <p className={Style.text}>Good</p>
        {num != 0 ? <p className={`${Style.num} ${click ? Style.extendMark : ''}`}>{num}</p> : ""}
      </button>
    </>
  )

}

export default Good
