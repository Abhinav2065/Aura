import React from 'react'
import { Link, Navigate, redirect } from 'react-router-dom'
import '../style/Register.css'
import '../style/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })


    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e) => {

        e.preventDefault()
        
        const response = await fetch("http://localhost:8800/api/auth/register", {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        })

        const data = await response.json()

        if (response.ok) {
            console.log("Registration Sucess: ", data)
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate('/');
        }
        else {
            console.log("ERROR", data)

            if(data.error) {
                alert(data.message);
            }
            else {
                alert("FAILED!!")
            }
        }

    }

  return (
    <div>
        <div className="register">

            <div className="register-section">
                <h3>Register</h3>
                <form onSubmit={handleFormSubmit} >
                    <label htmlFor="fname">username</label>
                    <br />
                    <input 
                    type='text' 
                    name="username" 
                    id="username" 
                    value={formData.username}
                    onChange={handleFormChange}
                    />
                    <br />
                    <label htmlFor="email">email</label>
                    <br />
                    <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    />
                    <br />
                    <label htmlFor="password">password</label>
                    <br />
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={formData.password}
                    onChange={handleFormChange}
                    
                    />
                    <br />
                    <button type='submit' className='login-btn'>Register</button>
                </form>

                <div className="register-link">
                    <p>Already have an account?</p>
                    <Link to='/login'><button>Login</button></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Register