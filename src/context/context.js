import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('red');
const ContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: '24px',
    height: '24px',
    background: theme
  }
  console.log(theme);
  
  return <div style={style} />;
}

export default ContextSample;