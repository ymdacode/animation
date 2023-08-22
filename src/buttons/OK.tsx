import React, { useState } from 'react';
import Style from './OK.module.css';

function Ok() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);

    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
    }, 500);
  };

  return (
    <div className={Style.wrapper}>
      <button
        className={Style.expandButton}
        onClick={handleButtonClick}
      >
        OK
      </button>
      <div className={`${Style.circle} ${isExpanded ? Style.extend : ''}`}></div>
    </div>
  );
}

export default Ok;
