import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import PriceComponent from './Pages/PriceComponent'

function App() {

  return (
    <>
      <div style={{display:"flex", flexDirection:"column"}}>
        <Navbar/>
        <Hero/>
        <PriceComponent/>
      </div>
    </>
  )
}

export default App
