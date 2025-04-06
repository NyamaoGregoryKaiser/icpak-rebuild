import React from 'react';
import { useTheme } from './theme-context'; // Update this import to match your theme context file

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>My Next.js Application</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </header>
      <main>
        {/* Your app content goes here */}
        <p>Welcome to my application!</p>
      </main>
    </div>
  );
}

export default App;