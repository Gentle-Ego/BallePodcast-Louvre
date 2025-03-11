import React from 'react';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';

const ThemeWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
