import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';


const SignUp = () => 
(
    <div className="signUpContainer">
        <form className="formSignup">
        <h3>This is the SignUp</h3>
        <input type="email" placeholder="Email" className="emailSignUp"/><br/>
        <input type="password" placeholder="Password" className="passSign"/><br/>
        <input type="password" placeholder="Confirm Password" /><br/>
        <input type="submit" placeholder="Submit"/><br/>
        <div>
        <button>Continue with Google</button>
        <p className="text-link">Are you already registred? <Link to="/">Login</Link></p>
        </div>
        </form>
    </div>
);

export default SignUp