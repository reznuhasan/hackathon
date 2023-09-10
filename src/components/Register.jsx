import { useState } from 'react'
import { Link } from 'react-router-dom'
import apiInstance from '../config/axios'

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  })
  const handleChanged = (e) => {
    setData(prevState => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isUser = await apiInstance.post('/smart-village/create', data)

      if (isUser.data.statusCode === 200) {
        localStorage.setItem('user', JSON.stringify(isUser.data.data))
        window.alert(isUser.data.message)
      }
    } catch (error) {
      window.alert("Error while creating user")
    }

  }
  return (
    <div className='register'>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit} className='register-form'>
        <div className="inputField">
          <label htmlFor="username">Username:</label>
          <input type="text" name="name" id="username" onChange={handleChanged} placeholder='enter your username' />
        </div>
        <div className="inputField">
          <label htmlFor="number">Phone Number:</label>
          <input type="tel" name="email" id="number" onChange={handleChanged}
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