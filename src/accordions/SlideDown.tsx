import React, { useState } from 'react';
import Hamburger from './HamburgerMenu';
import Style from './SlideDown.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Style.wrapper}>
        <div className={Style.head}><Hamburger /></div>
        <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
        </ul>
    </div>
  );
};

export default HamburgerMenu;