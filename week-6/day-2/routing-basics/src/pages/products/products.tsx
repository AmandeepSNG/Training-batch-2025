import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Products() {
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    // navigate(-1)
    console.log("params",new Date("2021-10-10 12:00:31").toISOString())
  },[])
  return (
    <div>
      Hello from Products page {new Date("2021-10-10 12:00:31").toISOString()}
    </div>
  )
}

export default Products
