import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './images/favicon.ico'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import Product from './Components/Product/Product'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      
    </div>
  )
}

export default App
