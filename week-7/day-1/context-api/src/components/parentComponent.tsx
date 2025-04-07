import React, { useState } from 'react'
import Child_1 from './children/child'
import Child_2 from './children/child_2'
import Child_3 from './children/child_3'
import { ParentContext } from '../context'

function ParentComponent () {
  const [message, setMessage] = useState('default message')
  const [color, setColor] = useState('red')
  const click = (message: string) => {
    setMessage(message)
    setColor('blue')
  }
  return (
    <ParentContext.Provider value={{ color, message, click }}>
      <div>
        <p>Hello I am parent</p>
        <Child_1 />
        <Child_2 />
        <Child_3 />
        <strong>Message: { message}</strong>
      </div>
    </ParentContext.Provider>
  )
}

export default ParentComponent
