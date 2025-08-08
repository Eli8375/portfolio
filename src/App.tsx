import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <main id='body' className='font-sans'>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Footer />
    </main> 
  )
}

export default App
