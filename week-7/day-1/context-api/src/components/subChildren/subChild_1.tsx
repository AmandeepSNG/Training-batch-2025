import React, { useContext } from 'react'
import { ParentContext } from '../../context'

function SubChild_1() {
  const {click} = useContext(ParentContext)
  return (
    <div>
      <p onClick={() => click("Sub Child 1 clicked")} >Hello I am children of 1</p>
    </div>
  )
}

export default SubChild_1
