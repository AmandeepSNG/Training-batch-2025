import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithAuth from './hoc/auth'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <WithAuth>
        <Header></Header>
        <Footer></Footer>
        <Sidebar></Sidebar>
        </WithAuth>
    </>
  )
}

export default App
