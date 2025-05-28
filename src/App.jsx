import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutus from './components/aboutus'
import Projects from './components/projects'
import Contact from './components/contact'
import Skills from './components/skills'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='px-4'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Aboutus></Aboutus>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
