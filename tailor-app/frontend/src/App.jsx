import { useState } from 'react'
import tailorLogo from './assets/tailor-blank-bg.png'
import './App.css'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <img src={tailorLogo} className="h-16 mx-auto" alt="Tailor logo" />
      </div>
      <h1>Hello World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <div className="mt-8">
        <Chat />
      </div>

      <p className="read-the-docs">
        Made using Vite
      </p>
    </div>
  )
}

export default App