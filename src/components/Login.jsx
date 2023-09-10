import { useState } from 'react'
import { Link } from 'react-router-dom'
import apiInstance from '../config/axios'

const Login = () => {
    const [loginData, setData] = useState({
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { number, password } = loginData
        try {
            const isUser = await apiInstance.post('/smart-village/login', {
                email: number,
                password
            })

            if (isUser.data.statusCode === 200) {
                localStorage.setItem('user', JSON.stringify(isUser.data.data))
                window.alert(isUser.data.message)
            }
        } catch (error) {
            window.alert("Invalid Credentials")
        }
    }
    return (
        <div className='login'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className="inputField">
                    <label htmlFor="number">Phone Number:</label>
                    <input type="text" name="number" id="numbr" onChange={handleChanged}
                        placeholder='Enter your phone number'
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