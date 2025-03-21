import React, { useState } from 'react'

function WithAuth(childrens: React.ReactElement) {
  const [count, setCount] = useState(0)
  function hocAuth() {
    return (
      <div>
        {childrens}
      </div>
    )
  }
  hocAuth.displayName = 'WithAuth'
  return hocAuth
}

export default WithAuth
