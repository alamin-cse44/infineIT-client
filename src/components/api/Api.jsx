import React, { useContext } from 'react'
import { InfineContext } from '../../App'

const Api = () => {
    const [test] = useContext(InfineContext)
  return (
    <div>
       <h1>{test}</h1>
    </div>
  )
}

export default Api
