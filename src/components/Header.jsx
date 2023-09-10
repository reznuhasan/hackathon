import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <h1>Digital Education</h1>
        </div>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/ai">AI</Link>
            <Link to="/machine">ML</Link>
            <Link to="/programming">Programming</Link>
            <Link to="/skills">Skills Development</Link>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Header