import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const Navigate = useNavigate()
  return (
    <>
        <h1>404 Not Found</h1>

        <button className='btn btn-dark' onClick={()=>Navigate('/', {replace:true})}>Go Back Home</button>
    </>
  )
}

export default NotFound