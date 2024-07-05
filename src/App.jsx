// import { useState } from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css'
import CategoryCollection from './components/CategoryCollection'
import Home from './components/Home'
import ImageCollection from './components/ImageCollection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/categories' element={<CategoryCollection/>} />
          <Route path='/images' element={<ImageCollection/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
