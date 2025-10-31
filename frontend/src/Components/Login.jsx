import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/Login.css'
import { useState } from 'react'

const Login = () => {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        username:'',
        password:''
    })


    const handleFormChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }


    const handleFormSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch("http://localhost:8800/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formdata),

        });

        const data = await response.json()

        if (response.ok) {
            console.log("Logged In");
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate('/');
        }
        else {
            console.log("ERROR", data);

            if (data.error) {
                alert(data.message);
            }
            else {
                alert("Failed!");
            }
            
        }
    }

  return (
    <div>
        <div className="login">
            
            <div className="welcome-section">
                <h2>Welcome to Aura!</h2>
                <p>Social Media Platform for those no longer with us. Share your memories with your loved ones and view the memories of your relatives.</p>
            </div>

            <div className="login-section">
                <h3>Login</h3>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email">email</label>
                    <br />
                    <input type="text" name="username" id="email" value={formdata.username} onChange={handleFormChange}/>
                    <br />
                    <label htmlFor="password">password</label>
                    <br />
                    <input type="password" name="password" id="password" value={formdata.password} onChange={handleFormChange} />
                    <br />
                    <button type='submit'>Login</button>
                </form>

                <div className="register-link">
                    <p>Don't have an account?</p>
                    <Link to='/register'><button>Create One!</button></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login