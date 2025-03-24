import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard'
import AboutUs from './components/aboutUs'
import Login from './components/login'
import PrivateRoute from './routes/privateRoutes'
import PublicRoute from './routes/publicRoutes'

function App () {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Routes>
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />

      </Routes>

    </React.Fragment>
  )
}

export default App
