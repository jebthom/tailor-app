import { useState } from 'react'
import tailorLogo from './assets/tailor-blank-bg.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={tailorLogo} className="" alt="Tailor logo" />
      </div>
      <h1>Hello World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Made using Vite
      </p>
    </>
  )
}

export default App
