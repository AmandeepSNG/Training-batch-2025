import React, { useContext } from 'react'
import SubChild_1 from '../subChildren/subChild_1'
import { ParentContext } from '../../context'

function Child_1() {
  const { click } = useContext(ParentContext)
  return (
    <div>
      <p onClick={() => click("Child 1 clicked") }>Hello I am child 1</p>
      <SubChild_1/>
    </div>
  )
}

export default Child_1
