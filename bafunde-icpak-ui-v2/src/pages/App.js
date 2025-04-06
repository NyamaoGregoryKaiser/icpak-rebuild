import React from 'react';
import ReactDOM from 'react-dom';
import '../app/globals.css';

import { ThemeProvider } from '../components/theme-context'; // Import the ThemeProvider
import { App } from './App';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
