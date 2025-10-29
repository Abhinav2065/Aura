import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Register.css'
import '../style/Login.css'

const Register = () => {
  return (
    <div>
        <div className="register">

            <div className="register-section">
                <h3>Register</h3>
                <form>
                    <label htmlFor="fname">First Name</label>
                    <br />
                    <input type='fname' name="fname" id="fname" />
                    <br />
                    <label htmlFor="lname">Last Name</label>
                    <br />
                    <input type="lname" name="lname" id="lname" />
                    <br />
                    <label htmlFor="email">email</label>
                    <br />
                    <input type="email" name="email" id="email" />
                    <br />
                    <label htmlFor="password">password</label>
                    <br />
                    <input type="password" name="password" id="password" />
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