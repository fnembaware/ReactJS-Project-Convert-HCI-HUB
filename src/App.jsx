import React, {lazy ,Suspense} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
const Home = lazy(() => import('./pages/Home'))
const Events = lazy(() => import('./pages/Events'))
const Speakers = lazy(() => import('./pages/Speakers'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const UniMemeMingles = lazy(() => import('./pages/UniMemeMingles'))
const Blog = lazy(() => import('./pages/Blog'))
const UniStyleEventShop = lazy(() => import('./pages/UniStyleEventShop'))
// import Events from './pages/Events'
// import Speakers from './pages/Speakers'
// import Testimonials from './pages/Testimonials'
// import UniMemeMingles from './pages/UniMemeMingles'
// import Blog from './pages/Blog'
// import UniStyleEventShop from './pages/UniStyleEventShop'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import Footer from './pages/Footer'
import PageNotFound from './pages/PageNotFound'
import Blog1 from './pages/Blog1'
import Blog3 from './pages/Blog3'
import Blog2 from './pages/Blog2'
// const Home = lazy(() => import('./pages/Home'))





function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>LOADING...</div>} > <Home /> </Suspense>} />
        <Route path='/events' element={<Suspense fallback={<div>LOADING...</div>} > <Events /> </Suspense> } />
        <Route path='/speakers' element={<Suspense fallback={<div>LOADING...</div>} > <Speakers /> </Suspense>} />
        <Route path='/testimonials' element={<Suspense fallback={<div>LOADING...</div>} > <Testimonials /></Suspense>} />
        <Route path='/uniMemeMingles' element={<Suspense fallback={<div>LOADING...</div>} > <UniMemeMingles /> </Suspense>} />
        <Route path='/blog' element={<Suspense fallback={<div>LOADING...</div>} > <Blog /> </Suspense>} />
        <Route path='/uniStyleEventShop' element={<Suspense fallback={<div>LOADING...</div>} > <UniStyleEventShop /> </Suspense>} />
        <Route path='/blog1' element={ <Blog1 /> }  />
        <Route path='/blog2' element={ <Blog2 /> } />
        <Route path='/blog3' element={ <Blog3 />}  />
        <Route path='*' element={ <PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
