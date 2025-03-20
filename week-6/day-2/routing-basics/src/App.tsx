import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Products from './pages/products/products'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/products/1234'>Products with id 1234</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<Products/>} />

          <Route path='*' element={<>Invalid route</>} />


        </Routes>
    </>
  )
}

export default App
