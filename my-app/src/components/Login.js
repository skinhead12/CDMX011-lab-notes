import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';
import '../index.css';

const Login = () => {
     const [email, setEmail] = useState ('')
    const [pass, setPass] = useState('')
    const history = useHistory();

    const loginUser = (e) =>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,pass)
        .then((res) => {
            history.push('/wallnotes')
            alert('Welcome')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="loginContainer">
            <form className="formLogin">
                <div>
                <h3>Login</h3>
            <input  onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" /><br/>
            <input   onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Password" /><br/>
            <button onClick={loginUser}>Submit</button>
                </div>
                <div>
                <p>OR</p>
            <button>Continue with Google</button>
            <p className="text-link">Not registered yet? <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
}


export default Login
