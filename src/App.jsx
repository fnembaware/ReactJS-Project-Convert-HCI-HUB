import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Speakers from './pages/Speakers'
import Testimonials from './pages/Testimonials'
import UniMemeMingles from './pages/UniMemeMingles'
import Blog from './pages/Blog'
import UniStyleEventShop from './pages/UniStyleEventShop'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import Footer from './pages/Footer'



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/uniMemeMingles' element={<UniMemeMingles />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/uniStyleEventShop' element={<UniStyleEventShop />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
