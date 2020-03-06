import React, { useState } from 'react';

const DelayedRender = ({ delay, beforeContent, afterContent }) => {
  const [render, setRender] = useState(false);
  setTimeout(() => {
    setRender(true);
  }, delay);

  return <>{render ? afterContent : beforeContent}</>;
};

export default DelayedRender;
