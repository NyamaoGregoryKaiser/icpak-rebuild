import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/global.css';

import { ThemeProvider } from './theme-context'; // Import the ThemeProvider
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
