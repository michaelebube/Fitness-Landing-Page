import React from 'react'
import Navbar from './components/Navbar_Hero'
import About from './components/About'
import Blog from './components/Blog'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <About/>
        <Blog/>
        <Trainers/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default App
