import { useState } from 'react';
import Pokegame from './pokegame';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Pokegame />
      </div>
    </>
  )
}

export default App
