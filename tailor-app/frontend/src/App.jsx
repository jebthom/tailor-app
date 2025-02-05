import { useState } from 'react'
import tailorLogo from './assets/tailor-blank-bg.png'
import './App.css'
import axios from 'axios'


function App() {
  const [prompt, setPrompt] = useState('');
  const [chat, setChat] = useState('');
  const [template, setTemplate] = useState('basic_chat');


  // Fetch Cohere's Chat response with axios; currenty using fetchChat() instead of this
  const handleChat = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/chat', { prompt });
      setChat(response.data.response);
      setPrompt('')

    } catch (error) {
      console.error('Failed to fetch chat response:', error);
    }
  };

  // Fetch Cohere's Chat response with fetch()
  const fetchChat = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch Cohere's generated text.")
      }

      const data = await response.json()
      setChat(data.response)
      setPrompt('')
      // return data.response; //  'response': response.message.content[0].text from backend/app.py

    } catch (error) {
      console.error("Failed to fetch Cohere's generated text: ", error)
      return null
    }
  }

  // why u no work ???
  const handleGenerate = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, template }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate response');
      }

      const data = await response.json();
      setChat(data.response);
      setPrompt('');

    } catch (error) {
      console.error('Failed to generate response:', error);
    }
  };

  return (
    <>
      <div>
        <img src={tailorLogo} className="" alt="Tailor logo" />
      </div>
      <h1>Hello World!</h1>

      <div className='card'>
        <p>{chat}</p>
      </div>
      
      <div className='card'>
        <textarea cols='60' rows='5' 
                  value={prompt} 
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='How would you like to be inspired?'>
        </textarea>

        <button onClick={fetchChat}>
          Send
        </button>    

      </div>

      <p className="read-the-docs">
        Made using Vite
      </p>
    </>
  )
}

export default App
