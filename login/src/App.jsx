import { useState } from 'react'

import './App.css'

function App() {
  const [login, setlogin] = useState(true)
  function loginSwitcher(){
    setlogin(!login)
  }
  return (
    <div className="container">
      <div className="user">
          <h1> Instagram </h1>
          <input hidden={login} type="tel" name="" id="" placeholder='Enter mobile number'/>
          <input hidden={login} type="text" name="" id="" placeholder='Full name' />
          <input type="email" name="" id="" placeholder='Enter email' />
          <input type="password" name="" id="" placeholder='Password' />
          <button >{login? 'Sign in':'Sign up'}</button>
          <footer>
            {login? "Do't have account?": "have a account?"} <span onClick={loginSwitcher}>{login? 'Sign up':'Login'}</span>
          </footer>
      </div>
    </div>
  )
}

export default App
