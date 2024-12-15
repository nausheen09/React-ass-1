import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import Herosection from './components/Hero-section.jsx'
import Footer from './components/Footer.jsx'
import Testimonial from './components/Testimonial.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Card/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
