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

        const response = await fetch("https://aura-1-r7kz.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formdata),

        });

        const data = await response.json()
        console.log("This is the DATA:", data);

        if (response.ok) {
            console.log("Logged In");

            if (data.token) {
                localStorage.setItem('token', data.token);


                if (data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                }

                const from = location.state?.from?.pathname || '/';
                navigate(from, {replace:true});
            }
            else {
                console.warn("Login Sucessfull but No Tokens were received ");
                navigate('/');
            }

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
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" name="username" id="username" value={formdata.username} onChange={handleFormChange}/>
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