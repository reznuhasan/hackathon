import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const err=useRouteError()
    console.log(err)
  return (
    <div className='errorContainer'>
        <h1>Opps!...</h1>
        <h2>Something Went Wrong</h2>
        <h5 className='error-text'>Status Code:{err.status} Message:{err.statusText}</h5>
    </div>
  )
}

export default ErrorPage