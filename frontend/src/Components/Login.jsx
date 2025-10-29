import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Login.css'

const Login = () => {
  return (
    <div>
        <div className="login">
            
            <div className="welcome-section">
                <h2>Welcome to Aura!</h2>
                <p>Social Media Platform for those no longer with us. Share your memories with your loved ones and view the memories of your relatives.</p>
            </div>

            <div className="login-section">
                <h3>Login</h3>
                <form>
                    <label htmlFor="email">email</label>
                    <br />
                    <input type="email" name="email" id="email" />
                    <br />
                    <label htmlFor="password">password</label>
                    <br />
                    <input type="password" name="password" id="password" />
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