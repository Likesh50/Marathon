import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import PriceComponent from './Pages/PriceComponent'
import Sponsors from './Pages/Sponsors'

function App() {

  return (
    <>
      <div style={{display:"flex", flexDirection:"column"}}>
        <Navbar/>
        <Hero/>
        <PriceComponent/>
        <Sponsors/>
      </div>
    </>
  )
}

export default App
