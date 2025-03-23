import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Custom dark forest green and light gray theme
  const theme = {
    backgroundColor: '#1a3320', // Dark forest green
    textColor: '#f0f0f0',      // Light white-grey
    secondaryBg: '#264d33',    // Slightly lighter forest green for cards
    accentColor: '#8fb996',    // Light forest green accent
    buttonColor: '#2a593c',    // Medium forest green for buttons
    buttonHover: '#387548',    // Lighter green for button hover
  }

  // CSS for the rotating cookie animation
  const cookieStyle = {
    margin: '20px auto', 
    display: 'block',
    animation: 'spin 20s linear infinite', // Slow rotation (20s for full rotation)
  }

  // Dynamic styles for the theme
  const appStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    minHeight: '100vh',
    padding: '2rem',
  }

  const cardStyle = {
    backgroundColor: theme.secondaryBg,
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  }

  const buttonStyle = {
    backgroundColor: theme.buttonColor,
    color: theme.textColor,
    border: 'none',
    padding: '0.6em 1.2em',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }

  // CSS animation keyframes need to be added to the document
  const addKeyframes = () => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleEl);
  };

  // Add keyframes when component mounts
  useState(() => {
    addKeyframes();
  }, []);

  return (
    <div style={appStyle}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: theme.accentColor }}>ViteReaction!</h1>
      <div className="card" style={cardStyle}>
        <button 
          onClick={() => setCount((count) => count + 1)}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = theme.buttonHover}
          onMouseOut={(e) => e.target.style.backgroundColor = theme.buttonColor}
        >
          You clicked {count} Times, Play Cookie Clicker Much?
        </button>
        
        {/* Cookie SVG with rotation animation */}
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 80 80" 
          xmlns="http://www.w3.org/2000/svg"
          style={cookieStyle}
        >
          <circle cx="40" cy="40" r="35" fill="#D2B48C" />
          <circle cx="25" cy="25" r="5" fill="#8B4513" />
          <circle cx="55" cy="30" r="5" fill="#8B4513" />
          <circle cx="40" cy="55" r="5" fill="#8B4513" />
          <circle cx="20" cy="45" r="4" fill="#8B4513" />
          <circle cx="60" cy="50" r="4" fill="#8B4513" />
          <circle cx="35" cy="15" r="4" fill="#8B4513" />
        </svg>
        
        <p style={{ color: theme.textColor }}>
          Edit <code style={{ color: theme.accentColor }}>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" style={{ color: theme.accentColor }}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App