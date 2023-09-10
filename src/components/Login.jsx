import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({
        number: "",
        password: "",
    })
    const handleChanged = (e) => {
        setData(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <div className='login'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className="inputField">
                    <label htmlFor="number">Phone Number:</label>
                    <input type="number" name="number" id="numbr" onChange={handleChanged}
                        placeholder='enter your phone number'
                    />
                </div>
                <div className="inputField">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={handleChanged}
                        placeholder='enter your password'
                    />
                </div>
                <div className="buttonField">
                    <button type='submit'>Login</button>
                    <p>Not have an account?<Link to="/register">Create Here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login