import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main> 
    </>

  )
}

export default App
