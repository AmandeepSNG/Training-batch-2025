import { useState } from 'react'
import './App.css'
import ShowCount from './Components/showCount/showCount'
import Button from './Components/button/button'

function App () {
  const [count, setCount] = useState<number>(0)
  const handleClick = () => {
    // const updatedCount = count + 1
    // setCount(updatedCount)
    setCount((prev) => prev + 1)
  }
  return (
    <>
      {/* <p>count = {count}</p> */}
      <ShowCount count={count} />
      <Button name={"Click here to update count"} class={"mx-2"} id={1} onClick={handleClick} onDoubleClick = {handleClick} />
      {/* <button onClick={handleClick} ></button> */}
    </>
  )
}

export default App
