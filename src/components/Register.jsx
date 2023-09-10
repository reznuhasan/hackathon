import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState({
    username: "",
    number: "",
    password: "",
    role: "",
  })
  const handleChanged = (e) => {
    setData(prevState=>(
      {
        ...prevState,
        [e.target.name]:e.target.value
      }
    ))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
  }
  return (
    <div className='register'>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit} className='register-form'>
        <div className="inputField">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={handleChanged} placeholder='enter your username'/>
        </div>
        <div className="inputField">
          <label htmlFor="number">Phone Number:</label>
          <input type="tel" name="number" id="number" onChange={handleChanged}
          placeholder='enter your phone number'
          />
        </div>
        <div className="inputField">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={handleChanged} 
          placeholder='enter your password'
          />
        </div>
        <div className="inputField">
          <select name="role" id="role" onChange={handleChanged}>
            <option value="">Select your role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="buttonField">
        <button type='submit'>Register</button>
        <p>Already Have an account?<Link to="/login">Login Here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register