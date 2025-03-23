import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ViteReaction!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} Times, Play Cookie Clicker Much?
        </button>
        
        {/* Cookie SVG added below the button */}
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 80 80" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: '20px auto', display: 'block' }}
        >
          <circle cx="40" cy="40" r="35" fill="#D2B48C" />
          <circle cx="25" cy="25" r="5" fill="#8B4513" />
          <circle cx="55" cy="30" r="5" fill="#8B4513" />
          <circle cx="40" cy="55" r="5" fill="#8B4513" />
          <circle cx="20" cy="45" r="4" fill="#8B4513" />
          <circle cx="60" cy="50" r="4" fill="#8B4513" />
          <circle cx="35" cy="15" r="4" fill="#8B4513" />
        </svg>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App