import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import PriceComponent from './Pages/PriceComponent'
import Sponsors from './Pages/Sponsors'
import AboutMarathon from './Pages/AboutMarathon'
import AboutDirector from './Pages/AboutDirector'

function App() {

  return (
    <>
      <div style={{display:"flex", flexDirection:"column"}}>
        <Navbar/>
        <Hero/>
        <AboutMarathon/>
        <AboutDirector/>
        <PriceComponent/>
        <Sponsors/>
      </div>
    </>
  )
}

export default App
