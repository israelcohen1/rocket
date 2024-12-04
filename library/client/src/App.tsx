import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './view/register/Register'
import Logo from './view/logo/Logo'


function App() {


  return (
    <>
    <div>
    <Logo ></Logo>
    </div>

    <div>

      <Register />
    </div>

    </>
  )
}

export default App
