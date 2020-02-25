import React, { useState } from 'react';

const DelayedRender = ({ delay, beforeContent, afterContent }) => {
  const [render, setRender] = useState(false);
  console.log('Render before timeout: ', render);
  setTimeout(() => {
    setRender(true);
    console.log('Render after timeout: ', render);
  }, delay);

  return <>{render ? afterContent : beforeContent}</>;
};

export default DelayedRender;
