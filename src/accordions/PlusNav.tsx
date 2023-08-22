import React, { useState, useRef } from 'react';
import Style from './PlusNav.module.css';

const PlusNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const processing = useRef(false);

  const animationTime = props.time;

  const toggleMenu = () => {
    //動作中は再アニメーションしない
    if (processing.current) return;
    processing.current = true;
    setTimeout(() => {
      processing.current = false;
    }, animationTime);

    setIsOpen(!isOpen);
  };

  return (
    <button className={`${Style.plusIcon} ${isOpen ? Style.open : ''}`} onClick={toggleMenu}>
      <div className={Style.line}></div>
      <div className={Style.line}></div>
    </button>
  );
};

export default PlusNav;