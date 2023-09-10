import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <Link to="/"><h1>Smart Village</h1></Link>
        </div>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/education">Digital Education</Link>
            <Link to="/agriculture">Agriculture</Link>
            <Link to="/programming">Programming</Link>
            <Link to="/skills">Skills Development</Link>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Header