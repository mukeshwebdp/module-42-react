import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className="box">
        <p>{count}</p>

        <div className="btn">
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=> count? 0 < setCount(count-1) : 0 }>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App
