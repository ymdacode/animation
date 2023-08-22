import React, { useState, useRef } from 'react';
import Hamburger from './HamburgerNav';
import Style from './SlideDown.module.css';

const SlideDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const processing = useRef(false);
  const animationTime = 750;


  const toggleMenu = () => {

    //動作中は再アニメーションしない
    if (processing.current) return;
    processing.current = true;
    setTimeout(() => {
      processing.current = false;
    }, animationTime);

    if(list.current){
      const listHeight = list.current.clientHeight;
      setContentHeight(listHeight);
    }

    setIsOpen(!isOpen);

  };

  return (
    <div className={Style.slideDownWrapper}>
      <div className={Style.head}>
        <span
          style={{ display: "block", width: "fit-content" }}
          onClick={toggleMenu}><Hamburger time={animationTime} /></span>
      </div>
      <div 
      className={Style.menuWrapper} 
      style={{ height: isOpen ? `${contentHeight}px` : "0px" }}>
        <ul
          className={Style.menuContent}
          ref={list}>
          <li className={Style.menuList}>item</li>
          <li className={Style.menuList}>item</li>
          <li className={Style.menuList}>item</li>
          <li className={Style.menuList}>item</li>
          <li className={Style.menuList}>item</li>
        </ul>
      </div>

    </div >
  );
};

export default SlideDown;