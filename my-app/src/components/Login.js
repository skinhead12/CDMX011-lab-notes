import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';


const Login = () => 
(
    <div className="loginContainer">
        <form className="formLogin">
        <h3>Login</h3>
        <input type="email" placeholder="Email" /><br/>
        <input type="password" placeholder="Password" /><br/>
        <input type="submit" placeholder="Submit" className="btnLogin"/><br/>
        <div>
        <button>Continue with Google</button>
        <p className="text-link">Not registered yet? <Link to="/signup">Sign Up</Link></p>
        </div>
        </form>
    </div>
);

export default Login
