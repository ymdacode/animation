import React, { useState, useRef } from 'react';
import Plus from './PlusNav';
import Style from './SlideDown2.module.css';

const SlideDown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
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

    if(isShow){
      setTimeout(() => {
        setIsShow(!isShow);
      }, 750);
    }else{
      setIsShow(!isShow);
    }

    if (list.current) {
      const listHeight = list.current.clientHeight;
      setContentHeight(listHeight);
    }

    setIsOpen(!isOpen);

  };

  return (
    <div className={Style.slideDown2Wrapper}>
      <div className={Style.head}>
        <span
          style={{ display: "block", width: "fit-content" }}
          onClick={toggleMenu}><Plus time={animationTime} /></span>
      </div>
      <div
        className={Style.menuWrapper}
        style={{ 
          height: isOpen ? `${contentHeight}px` : "0px" ,
          visibility: isShow ? "visible" : "hidden"}}>
          <ul
            className={`${Style.menuContent} ${isOpen ? Style.slideDown : Style.slideUp}`}
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

export default SlideDown2;